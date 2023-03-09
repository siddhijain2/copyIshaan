import React, { useState, useEffect } from "react";

function EmotionDisplay(rightEmotion) {
    const JsonStringify =  JSON.stringify(rightEmotion);
    const JsonRes = JSON.parse(JsonStringify);
    const actual = JsonRes.rightEmotion;
  const [emotion, setEmotion] = useState(localStorage.getItem("emotion"));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentEmotion = localStorage.getItem("emotion");
      if (currentEmotion !== emotion) {
        setEmotion(currentEmotion);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [emotion]);

  return (
    <div className="text-center p-2">
      <div className="font-bold text-l">
        <h1>Detected Emotion</h1>
      </div>
      <p>{emotion}</p>
      <div className="font-bold text-l">
        <h1>Correct Emotion</h1>
      </div>
      <p>{actual}</p>
    </div>
  );
}

export default EmotionDisplay;
