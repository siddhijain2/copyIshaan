// import fluency from ""../recorder.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { flu_advanced, flu_beginner, flu_intermediate, star_fill,star_empty } from "../../assets";

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
      <div class="max-w-[650px] py-4 px-8 bg-[#F3E5AB] shadow-lg rounded-lg mx-auto my-44 h-[75%]">
        <div className="mt-10 justify-center text-center items-center relative">
          {/* <div class=" flex w-50 h-auto justify-center text-center items-center mt-2"> */}
            {f === "0" ? (
              <>
              <div class=" flex w-50 h-auto justify-center text-center items-center mt-2">
                
                  <img src={star_fill} class="w-12 h-12 " />
                  <img src={star_empty} class="w-12 h-12 " />
                  <img src={star_empty} class="w-12 h-12 " />
                </div>
                
                <div>
                  English fluency is at beginner level. Needs a bit more
                  pratice.
                </div>
              </>
            ) : f === "1" ? (
              <>
                <div class=" flex w-50 h-auto justify-center text-center items-center mt-2">
                  <img src={star_fill} class="w-12 h-12 " />
                  <img src={star_fill} class="w-12 h-12 " />
                  <img src={star_empty} class="w-12 h-12 " />
                </div>

                <div>
                  Keep practicing. English fluency is at intermediate level.
                </div>
              </>
            ) : f === "2" ? (
              <>
                <div class=" flex w-50 h-auto justify-center text-center items-center mt-2">
                  <img src={star_fill} class="w-12 h-12 " />
                  <img src={star_fill} class="w-12 h-12 " />
                  <img src={star_fill} class="w-12 h-12 " />
                </div>

                <div>
                  English fluency is at advanced level. You're doing great!
                </div>
              </>
            ) : (
              <div> Record audio to get fluency</div>
            )}
          
          <div class=" flex justify-center text-center items-center mt-2">
            <div>Words per minute = {wpm}</div>
          </div>
          <div class=" flex justify-center text-center items-center mt-2">
            {wpm < 120 ? (
              <>
                <div>
                  {" "}
                  Try speaking a bit faster. The best speed is 120 words per
                  minute.
                </div>
              </>
            ) : wpm > 120 ? (
              <>
                <div>
                  Try speaking a bit slower. The best speed is 120 words per
                  minute.
                </div>
              </>
            ) : (
              <div> Speed is perfect.</div>
            )}
          </div>
          <Link to="/speakwise">
            <button class="mt-5 border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300">
              Try again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SpeakwiseResult;
