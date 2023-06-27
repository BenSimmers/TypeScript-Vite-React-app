import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 text-center min-h-screen flex flex-col items-center justify-center">
      {/* put the two images next to eachother in a row */}

      <div className="bg-white rounded-lg shadow-lg p-10 max-w-sm w-full space-y-2">
        <div className="flex flex-row justify-center">
          <img
            src={reactLogo}
            className="animate-spin-slow"
            alt="logo"
            width="200"
            height="200"
          />
          <img
            src={viteLogo}
            className="animate-spin-slow"
            alt="logo"
            width="200"
            height="200"
          />
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
