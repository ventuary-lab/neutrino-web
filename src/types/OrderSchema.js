import PropTypes from 'prop-types';

const OrderSchema = PropTypes.shape({
    id: PropTypes.string,
    height: PropTypes.number,
    timestamp: PropTypes.number,
    owner: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    filledTotal: PropTypes.number,
    index: PropTypes.number,
    amount: PropTypes.number,
    filledAmount: PropTypes.number,
    restAmount: PropTypes.number,
    pairName: PropTypes.string,
    status: PropTypes.string,
});

export default OrderSchema;
