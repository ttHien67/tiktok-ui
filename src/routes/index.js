import HomePage from '@/pages/Home/Home';
import FollowingPage from '@/pages/Following/Following';
import UploadPage from '@/pages/Upload/Upload';
import SearchPage from '@/pages/Search/Search';
import OnlyHeader from '@/components/Layout/OnlyHeader';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: UploadPage, layout: OnlyHeader },
    { path: '/search', component: SearchPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
