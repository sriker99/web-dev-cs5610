import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducer/hello";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import todos from "./reducer/todos";
import Todos from "./Todos-Component";

const reducers =
    combineReducers({hello, todos});
const store = createStore(reducers);
const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};
export default ReduxExamples;