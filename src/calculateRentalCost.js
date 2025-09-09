/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    if (days >= 7) {
    return days * 40 - 50;
  }

   else if (days >= 3) {
    return 40 * days - 20;
  }
 
    return 40 * days;
  

}

module.exports = calculateRentalCost;
