import Form from "./Components/Form";
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Home from "./Components/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/home/:usn" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/:admin/:user/:id" element={<Form />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
