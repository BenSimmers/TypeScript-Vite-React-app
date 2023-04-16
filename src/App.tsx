import React, { ReactElement, useState } from 'react'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      Hello world from React and Vite!
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </div>
  )
}

export default App
