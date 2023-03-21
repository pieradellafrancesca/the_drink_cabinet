export const filteredList = (list, key, value) =>
  list.filter((item) => item[key] === value);

export const getInfo = (obj, string) => {
  const entries = Object.entries(obj); // ritorna un array di coppie [key, value]
  // console.log(entries);
  const filteredEntries = entries.filter(
    ([key, value]) => key.includes(string) && value
  );
  // console.log(filteredEntries);
  return filteredEntries;
};

export const getRecipe = (obj, string1, string2) => {
  const getIngredient = getInfo(obj, string1);
  const getMeasure = getInfo(obj, string2);

  const recipe = getIngredient.map((x, i) => [x, getMeasure[i]]);

  return recipe;
};
//   console.log(getRecipe);
