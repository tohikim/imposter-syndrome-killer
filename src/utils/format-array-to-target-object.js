export const formatArrayToTargetObject = (array, targetValue, subKey) => {
  return array.reduce((acc, cur) => {
    const curNestedKey = subKey ? cur[subKey] : cur;

    acc[curNestedKey] = targetValue;

    return acc;
  }, {});
};
