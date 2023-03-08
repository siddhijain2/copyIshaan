// import fluency from ""../recorder.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { flu_advanced, flu_beginner, flu_intermediate } from "../../assets";

function SpeakwiseResult() {
  // var f = localStorage.getItem("fluency");
  const [f, setF] = useState(localStorage.getItem("fluency"));
  // console.log(f);
  const [imgsrc, setImgsrc] = useState();
  var wpm = Number(localStorage.getItem("wpm"));
  useEffect(() => {
    // f = localStorage.getItem("fluency");
    setF(localStorage.getItem("fluency"));
    // console.log(f);
    if (f === "0") setImgsrc(flu_beginner);
    if (f === "1") setImgsrc(flu_intermediate);
    if (f === "2") setImgsrc(flu_advanced);
  }, []);

  return (
    <>
      {/* {console.log(f)} */}
      {/* {console.log(typeof f)} */}
      <div className="mt-40">
        {f === "0" ? (
          <>
            <img
              src={imgsrc}
              width="50%"
              height="auto"
              class="flex items-center justify-center"
            />
          </>
        ) : f === "1" ? (
          <>
            <img
              src={imgsrc}
              width="50%"
              height="auto"
              class="flex items-center justify-center"
            />
          </>
        ) : f === "2" ? (
          <>
            <img
              src={imgsrc}
              width="50%"
              height="auto"
              class="flex items-center justify-center"
            />
          </>
        ) : (
          <div> Record audio to get fluency</div>
        )}

        <div>Words per minute = {wpm}</div>

        {wpm<120 ? (
          <>
            <div> Try speaking a bit faster.</div>
          </>
        ) : wpm>120 ? (
          <>
            <div>Try speaking a bit slower.</div>
          </>
        ) : (
          <div> Speed is perfect.</div>
        )}
        <Link to="/speakwise">
          <button class="mt-5 border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300">
            Try again
          </button>
        </Link>
      </div>
    </>
  );
}

export default SpeakwiseResult;
