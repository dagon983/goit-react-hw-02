
const Notification = ({totalFeedback}) => {
  return (
    <div style={{display: totalFeedback === 0 ? "block" : "none"}}>No feedback yet</div>
  )
}

export default Notification