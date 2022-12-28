import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItems from './MenuItems';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children, items= [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItems key={index} data={item} />;
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
