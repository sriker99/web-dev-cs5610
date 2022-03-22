import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";
import {BrowserRouter,  Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/hello" exact={true}><HelloWorld/></Route>
                <Route path="/labs" exact={true}><Labs/></Route>
                <Route path="/" exact={true}><Labs/></Route>
                <Route path="/tuiter/explore" exact={true}><ExploreScreen /></Route>
                <Route path="/tuiter/home" exact={true}><HomeScreen /></Route>
                <div className="Container mt-2 mx-4" id="wd-explore"><Route path="/tuiter" exact={true}><Tuiter/></Route></div>
            </div>
        </BrowserRouter>
    );
}

export default App;
