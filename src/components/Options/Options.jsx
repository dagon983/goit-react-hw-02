
const Options = ({updateFeedback, clearTable, totalFeedback}) => {
  return (
    <div>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        <button style={{display: totalFeedback === 0 ? "none" : "block"}} onClick={clearTable} >Reset</button>
    </div>
  )
}

export default Options