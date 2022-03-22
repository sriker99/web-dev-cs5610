import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
const index = () => {
    return (
        <div>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <h1>Non React.js Assignments</h1>
            <ul>
                <li><a href="./labs/a2/index.html">Assignment 2</a></li>
                <li><a href="./labs/a3/index.html">Assignment 3</a></li>
                <li><a href="./labs/a4/index.html">Assignment 4</a></li>
                <li><a href="./labs/a5/index.html">Assignment 5</a></li>
            </ul>
        </div>
    );
};
export default index;