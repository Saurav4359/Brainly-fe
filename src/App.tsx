import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
    <div className="p-4">

     <div className="flex justify-end gap-4"> 
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
      <Button
        variant="secondary"
        text="Share Brain "
        startIcon={<ShareIcon />}
      />
      </div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/stygianbroker/status/2001734081529418133?s=20"
          title="twitter post"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=0WS5eq9fOYk"
          title="youtube video"
        />
      </div>
      </div>
    </>
  );
}

export default App;
