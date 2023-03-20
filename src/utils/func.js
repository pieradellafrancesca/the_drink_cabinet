export const filteredList = (list, key, value) =>
  list.filter((item) => item[key] === value);

export const getIngredients = (obj, string) => {
  const entries = Object.entries(obj); // ritorna un array di coppie [key, value]
  // console.log(entries);
  const filteredEntries = entries.filter(
    ([key, value]) => key.includes(string) && value
  );
  // console.log(filteredEntries);
  return filteredEntries;
};
