import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type ContentItem = {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
};

export function useContent() {
  const [contents, setContents] = useState<ContentItem[]>([]);

  const refresh = useCallback(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }, []);

  const deleteContent = useCallback(async (contentId: string) => {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      data: {
        contentId,
      },
    });

    await refresh();
  }, [refresh]);

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, [refresh]);

  return { contents, refresh, deleteContent };
}
