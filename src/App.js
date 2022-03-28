import './App.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen";
import {BrowserRouter,  Route,Routes} from "react-router-dom";
import Profile from "./components/Tuiter/Profile";
import EditProfile from "./components/Tuiter/EditProfile";
function App() {
    return (
        <BrowserRouter>
            <div className="container m-0 p-0">
                <Routes>
                    <Route path="/">
                        <Route index
                               element={<Labs/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="edit" element={<EditProfile/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
