import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../HomeScreenPostSummaryList";
import PostList from "./PostList";

const HomeScreen = () => {

    return (<>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                    <NavigationSidebar active='home'/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <PostList/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>
        </>
    );
};
export default HomeScreen;

