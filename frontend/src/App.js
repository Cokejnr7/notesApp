import NoteList from "./screens/NoteList";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteDetail from "./screens/NoteDetail";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Navbar />
          <Route path={"/"} exact component={NoteList} />
          <Route path="/notes/:id" component={NoteDetail} />
        </div>
      </div>
    </Router>
  );
}

export default App;
