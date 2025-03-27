import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlePromise = fetch("../public/bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h3>Buy Awesome Water Bottle</h3>
      <Suspense fallback={<h3>Bottles are Loading . . . . . </h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
