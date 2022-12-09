export const filterItems = (data, minPrice, maxPrice, minRating, maxRating) => {
  const filteredData = data.filter(
    (item) =>
      item.price >= minPrice &&
      item.price <= maxPrice &&
      item.rating.rate >= minRating &&
      item.rating.rate <= maxRating
  );
  return filteredData;
};
