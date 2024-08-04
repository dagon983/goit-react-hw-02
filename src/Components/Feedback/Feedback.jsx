

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {
  return (
    <div style={{display: totalFeedback === 0 ? "none" : "block"}}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
    </div>
  )
}

export default Feedback