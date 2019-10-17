import PropTypes from 'prop-types';

const UserSchema = PropTypes.shape({
    address: PropTypes.string,
    role: PropTypes.string,
});

export default UserSchema;
