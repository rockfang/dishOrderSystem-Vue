
let storageTool = {
  set: function (key,value) {
    localStorage.setItem(key,JSON.stringify(value));
  },
  get: function (key) {
    return JSON.parse(localStorage.getItem(key));
  }

};
export default storageTool;
