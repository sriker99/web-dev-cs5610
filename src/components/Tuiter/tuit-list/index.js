import React,{useEffect} from "react";
import TuitListItem from "../tuit-list-item"
import {useDispatch, useSelector}
    from "react-redux";
import {findAllTuits,deleteTuit}
    from "../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();

    useEffect(()=>findAllTuits(dispatch), []);
    return (
        <>
            <div className="list-group wd-post-list-group">
                {
                    tuits.map(tuit => {
                            return (<TuitListItem posts={tuit}/>);
                        }
                    )
                }
            </div>
        </>
    );
}

export default TuitList;