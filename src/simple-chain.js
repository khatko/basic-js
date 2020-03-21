const chainMaker = {
  links : [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position !== "number") || position < 1 || position > this.getLength()) {
      this.links = [];
      throw Error;
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    this.links.forEach(function(link, i) {
      if (result !== "") {
        result += "~~";
      }
      result += `( ${link} )`;
    });
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
