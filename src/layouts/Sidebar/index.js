import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '@/components/Icons';
import Menu, { MenuItem } from '@/layouts/Sidebar/Menu';
import config from '@/config/routesConfig';
import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </div>
    );
}

export default Sidebar;
