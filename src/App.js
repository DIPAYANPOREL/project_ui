import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";


import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/home.scss";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element=
          {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
