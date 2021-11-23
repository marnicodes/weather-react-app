import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="App">
      <div className="box">
        {" "}
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
