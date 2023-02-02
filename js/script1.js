function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
}
