import HomePage from '@/pages/Home/Home';
import FollowingPage from '@/pages/Following/Following';
import UploadPage from '@/pages/Upload/Upload';
import SearchPage from '@/pages/Search/Search';
import LivePage from '@/pages/Live';
import OnlyHeader from '@/layouts/OnlyHeader';
import routesConfig from '@/config/routesConfig';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.profile, component: FollowingPage },
    { path: routesConfig.upload, component: UploadPage, layout: OnlyHeader },
    { path: routesConfig.search, component: SearchPage, layout: null },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.live, component: LivePage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
