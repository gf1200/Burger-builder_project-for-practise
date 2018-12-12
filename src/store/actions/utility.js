export const flattenFireBaseObject = function(fireBaseObject) {
  const result = [];
  for (let key in fireBaseObject) {
    result.unshift({
      ...fireBaseObject[key],
      key: key
    });
  }

  // var keys = Object.keys(fireBaseObject),
  //   i = keys.length,
  //   result = [],
  //   flatten;

  // while (i--) {
  //   flatten = {
  //     ...fireBaseObject[keys[i]],
  //     key: keys[i]
  //   };
  //   result.unshift(flatten);
  // }

  return result;
};

// export const fireBaseTransformId = res => {
//   const array = [];
//   for (let key in res.data) {
//     array.push({
//       ...res.data[key],
//       id: key
//     });
//   }
//   return array;
// };
