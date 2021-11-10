module.exports = {
  customLog,
  filterObj
};


function customLog(x) {
  console.log(`\x1b[32m%s\x1b[0m`, `Mengerjakan Query : `, `\x1b[0m ${x}`);
}

function filterObj(objKu, filter = []) {
  return Object.keys(objKu)
  .filter(key => filter.includes(key))
  .reduce((obj, key) => {
      obj[key] = objKu[key];
      return obj;
  },{});
}