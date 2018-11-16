export const updateObject = (oldObject, updateProporties) => {
  return {
    ...oldObject,
    ...updateProporties
  };
};
