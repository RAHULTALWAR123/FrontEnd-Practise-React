
function Progress({ progress }) {
  return (
    <div className="text-center p-20">
      <h1 className="text-5xl font-mono">This is my Progress Bar</h1>

      <div className="text-center mt-10 border rounded-xl shadow-lg overflow-hidden">
        <div className="text-right bg-green-400 p-1" style={{ width: `${progress}%`, color: progress < 5 ? 'red' : 'white' }}>
            {progress}%
        </div>
      </div>
    </div>
  )
}

export default Progress
