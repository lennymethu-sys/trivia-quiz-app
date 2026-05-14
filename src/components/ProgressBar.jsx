
function ProgressBar({current, total}) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-meta">
        <span> Question {current} of {total} </span>
        <span> {percentage}% </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  );
function ProgressBar(props) {
  return <div>ProgressBar — Member 2 working on this</div>
}
}
export default ProgressBar;