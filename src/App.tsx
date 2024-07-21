import "./App.css";
import Home from "./Pages/Home/Home";
import Subnav from "./Components/Subnav/Subnav";

function App() {
    return (
        <div className="font-sans">
            <Subnav />
            <Home />
        </div>
    );
}

export default App;
