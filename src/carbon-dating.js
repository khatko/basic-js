const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !parseFloat(sampleActivity) || parseFloat(sampleActivity) < 0 || parseFloat(sampleActivity) > 15) return false;
  let N0 = MODERN_ACTIVITY;
  let N = parseFloat(sampleActivity);
  let t = HALF_LIFE_PERIOD;
  let k = 0.693 / t;

  return Math.ceil(Math.log(N0 / N) / k);
};
