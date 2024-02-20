function filterCities({inputCity, amazonCities}) {
  console.log(inputCity)
  const cities = amazonCities.locales.amazon_cities.filter((city) => {
    return city?.name?.toLowerCase()?.includes(inputCity?.toLowerCase());
  });
  return cities;
}

export { filterCities };
