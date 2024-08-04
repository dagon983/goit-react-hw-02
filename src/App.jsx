import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useEffect, useState } from "react";

const objFeedback = {
	good: 0,
	neutral: 0,
	bad: 0
};


function App() {
  const [values, setValues] = useState(() => {
    const savedData = window.localStorage.getItem("objFeedback");
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return objFeedback;
  });

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("objFeedback", JSON.stringify(values), [values]);
  })


  const updateFeedback = feedbackType => {
    setValues(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  }

  const clearTable = () => {
    setValues( prev => ({
      ...prev,
      "good" : 0,
      "neutral" : 0,
      "bad" : 0
    }))
  }

  return (
    <>
    <Description/>
    <Options updateFeedback={updateFeedback} clearTable={clearTable} totalFeedback={totalFeedback}/>
    { 
      totalFeedback === 0 ? 
      <Notification/> :
      <Feedback {...values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
    }
    </>
  )
}

export default App
