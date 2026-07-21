import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🚀 Jenkins CI/CD Pipeline Test</h1>
      <p>If you can see this, the pipeline worked successfully in ohio!</p>
      <button onClick={() => alert("Pipeline Test Successful!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;