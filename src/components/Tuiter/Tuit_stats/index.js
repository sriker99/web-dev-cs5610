import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
            tuit.stats.likes++;
        updateTuit(dispatch,tuit);
    };
    const disLikeTuit = () => {
            tuit.stats.dislikes++;
        updateTuit(dispatch,tuit);
    };
    return (<>
        <div>
            <i onClick={likeTuit} className="wd-gray-color far fa-thumbs-up ms-2"></i><span className="wd-gray-color">{tuit.stats.likes}</span>
        </div>
            <div>
                <i onClick={disLikeTuit} className="wd-gray-color far fa-thumbs-down ms-2"></i><span className="wd-gray-color">{tuit.stats.dislikes}</span>
            </div>
        </>
);
}
export default TuitStats;