const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    const newCartItemsPrices = cartItemsPrices.map(Number)
    let result = newCartItemsPrices.reduce((sum, current) => sum + current, 0)
    const sum = Number(result.toFixed(2))
    if (sum === WINNING_SUM) {
        return true
    } else {
        return false
    }
}

module.exports = doesCartWinPrize;

