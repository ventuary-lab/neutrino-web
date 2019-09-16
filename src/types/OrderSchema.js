import PropTypes from 'prop-types';

const OrderSchema = PropTypes.shape({
    height: PropTypes.number,
    timestamp: PropTypes.number,
    owner: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    filledTotal: PropTypes.number,
    discountPercent: PropTypes.number,
    index: PropTypes.number,
    amount: PropTypes.number,
    filledAmount: PropTypes.number,
    restAmount: PropTypes.number,
    pairName: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string,
});

export default OrderSchema;
