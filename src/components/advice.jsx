import { RiDoubleQuotesL } from "react-icons/ri";
import { FaDice } from "react-icons/fa";
import { useEffect, useState } from "react";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setAdvice(data);
      console.log(data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex items-center justify-center bg-black h-screen w-screen">
      {advice.slip && (
        <div className="flex flex-col bg-slate-600 h-[25rem] w-[38rem] rounded-lg">
          <div className="flex items-center justify-center">
            <span className="text-5xl text-cyan-400">
              <RiDoubleQuotesL />
            </span>
          </div>
          <div className="flex items-center justify-center h-20">
            <span className="font-semibold text-cyan-400 text-xl">
              ADVICE : {advice.slip.id}
            </span>
          </div>
          <div className="flex items-center justify-center h-40 ml-12 mr-12">
            <span className="font-semibold text-cyan-400 text-2xl">
              <p>{advice.slip.advice}</p>
            </span>
          </div>
          <div className="flex items-center justify-center h-24">
            <button
              onClick={getData}
              className="text-3xl text-cyan-400 py-2 px-2 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-full"
            >
              <FaDice />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Advice;
