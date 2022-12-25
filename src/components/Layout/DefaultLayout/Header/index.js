import style from './Header.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style)


function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>

            </div>
        </div>
    )
}

export default Header;
