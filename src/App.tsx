import "./App.css";
import { Button } from "./components/ui/button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  function Add() {}

  return (
    <>
      <Button startIcon={<div className="flex"> <PlusIcon size="lg" />  </div> } variant="primary" size="md" text="delete" onClick={Add}></Button>
      <Button variant="secondary" size="md" text="share" onClick={Add}></Button>
    </>
  );
}

export default App;
