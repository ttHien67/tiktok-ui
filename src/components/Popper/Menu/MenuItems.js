import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import Button from '@/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, onclick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onclick}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object,
    onclick: PropTypes.func
}

export default MenuItems;
