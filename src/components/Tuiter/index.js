import React from "react";
import './Styles/explore.css';
import './vendors/bootstrap/bootstrap.min.css';
import {Outlet, useLocation} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import whoReducer from "./reducers/who-reducers";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";
import 'font-awesome/css/font-awesome.min.css';

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer,profile:profileReducer
});
const store = createStore(reducer);
const Tuiter = () => {
    const location=useLocation();
    console.log(location.pathname);
    return (
        <Provider store={store}>
            <div className="mt-2 mx-4" id="wd-explore">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                        {location.pathname === '/tuiter/explore' ? <NavigationSidebar active='explore'/> : ''}
                        {location.pathname === '/tuiter/home' ? <NavigationSidebar active='home'/> : ''}
                        {location.pathname === '/tuiter/' ? <NavigationSidebar active='home'/> : ''}
                        {location.pathname === '/tuiter/profile' ? <NavigationSidebar active='profile'/> : ''}
                        {location.pathname === '/tuiter/edit' ? <NavigationSidebar active='profile'/> : ''}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                        <Outlet/>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );

};
export default Tuiter;