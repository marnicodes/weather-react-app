import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App(props) {
  return (
    <div className="App">
      <div className="box">
        {" "}
        <Weather />
        <h1>(City)</h1>
        <div className="last-updated">Last updated:</div>
        <div className="container">
          <div className="row">
            <div className="col-4">(Icon) </div>
            <div className="col-4">(Temperature)</div>
            <div className="col-4">(WeatherDetails)</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
