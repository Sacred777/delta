export function getPercentString(currentValue, baseValue) {
  const percent = (currentValue - baseValue) * 100 / baseValue;
  return formatPercentToString(percent);
}


function formatPercentToString (percent) {
  return Math.round(percent) + '%';
}
