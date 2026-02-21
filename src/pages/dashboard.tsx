import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const { contents, refresh } = useContent();
  const navigate = useNavigate();
  useEffect(() => {
    refresh();
  }, [modalOpen]);
  function logout() {
    localStorage.removeItem("token");
    alert("You have been logged out");
    navigate("/", { replace: true });
  }
  return (
    <>
      {<Sidebar />}
      <div className="p-4 ml-72 h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            text="Share Brain "
            startIcon={<ShareIcon />}
          />
          <Button onClick={logout} variant="primary" text="Logout" />
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}
