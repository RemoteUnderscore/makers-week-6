const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];



 const generateMessages = (list) => {
  return list.map((namesAndDiscounts) => {
    return `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies today!`;
  });
}

module.exports = generateMessages;