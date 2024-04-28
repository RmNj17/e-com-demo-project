export const formatPrice = (price) => {
  const exchangeRateUSDToNPR = 133.65;

  const priceNPR = price * exchangeRateUSDToNPR;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
  }).format(priceNPR);
};
