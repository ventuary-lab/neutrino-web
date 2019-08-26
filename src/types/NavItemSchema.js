import PropTypes from 'prop-types';

const NavItemSchema = PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    path: PropTypes.string,
    isVisible: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object),
    roles: PropTypes.arrayOf(PropTypes.string),
    isShowLeftSidebar: PropTypes.bool,
});

export default NavItemSchema;
