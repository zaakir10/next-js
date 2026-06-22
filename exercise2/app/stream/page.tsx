import { Suspense } from "react";
import SlowComponent from "../components/SlowComponent";

export default function StreamPage() {
  return (
    <div>
      <h1>Streaming Example</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}