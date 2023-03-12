/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const calcHumanReadableTimeFromSeconds = (seconds) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60) || 0;
  const displayedMinutes = totalMinutes % 60;
  let humanTime = ``;
  if (hours > 0) {
    humanTime += `${hours}h `;
  }
  humanTime += `${displayedMinutes}m`;

  return humanTime;
};
