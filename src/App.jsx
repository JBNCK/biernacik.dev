import isGerman from "./isGerman";

function App() {
  const pageTitle = "biernacik.dev";
  const pageDesc = isGerman() ? "Diese website befindet sich noch im Aufbau" : "This website is still under construction";
  return (
    <div className="page">
      <div className="main-section">
      <h1>{pageTitle}</h1>
      <p>{pageDesc}</p>
      </div>
    </div>
  )
}

export default App;