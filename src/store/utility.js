export const updateObject = (oldObject, updateProporties) => {
  return {
    ...oldObject,
    ...updateProporties
  };
};

export const addItem = (array, action) => {
  return [...array, action];
};

export const removeItem = (array, action) => {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
};
