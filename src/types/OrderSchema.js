import PropTypes from 'prop-types';

const OrderSchema = PropTypes.shape({
    height: PropTypes.number,
    owner: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    discountPercent: PropTypes.number,
    index: PropTypes.number,
    amount: PropTypes.number,
    pairName: PropTypes.string,
    id: PropTypes.string,
});

export default OrderSchema;
