import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../HomeScreenPostSummaryList/index.js";
import postList from "./PostList.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-3 col-sm-3">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-11 col-sm-11">
                ${postList()}
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
    `);

})($);
