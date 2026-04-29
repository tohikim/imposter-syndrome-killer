export const mapStateToCurrentScore = (obj) => {
  let sumValue = 0;
  for (const [_key, value] of Object.entries(obj)) {
    sumValue = sumValue + value;
  }
  return sumValue;
};
