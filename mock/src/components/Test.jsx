import { useState } from "react";

function Test() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
        }, 5000);
    // });

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default Test
