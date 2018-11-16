export const fireBaseTransformId = res => {
  const array = [];
  for (let key in res.data) {
    array.push({
      ...res.data[key],
      id: key
    });
  }
  return array;
};
