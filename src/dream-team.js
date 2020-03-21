module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = "";
  members.filter(s => typeof s === "string").map(s => s.trim().toUpperCase()).sort().forEach(element => {
    result += element[0];
  });
  return result;
};