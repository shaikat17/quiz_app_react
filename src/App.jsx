import { useState } from "react";
import "./App.css";
import SetupForm from "./components/SetupForm";
import { useGlobalContext } from "./Context";
import Loading from "./components/Loading";

function App() {

  const { waiting, loading, question, correct, index} = useGlobalContext()

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return <h1>Hello</h1>;
}

export default App;
