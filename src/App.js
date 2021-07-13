import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponent from "./layout/NavbarComponent";
import FooterComponent from "./layout/FooterComponent";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

export default App;
