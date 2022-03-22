import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
            <div className="list-group wd-list-group">
                <div className="list-group-item">
                    <div className="row">
                        <span className="wd-font-white">Who to follow</span>
                    </div>
                </div>
                    {
                        who.map(w=>{
                            return (
                            <WhoToFollowListItem who={w}/>
                            );
                        })
                    }
            </div>
);
}

export default WhoToFollowList;
