export const formatActionItemsToState = (items, targetValue) => {
  return items.reduce((acc, cur) => {
    acc[cur] = targetValue;

    return acc;
  }, {});
};
