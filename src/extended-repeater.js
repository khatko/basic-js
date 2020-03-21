module.exports = function repeater(str, options) {
    let addition = "";
    if ("addition" in options) {
        let addArr = Array(options.additionRepeatTimes).fill(options.addition + "");
        let addSeparator = options.additionSeparator ? options.additionSeparator : "";
        addition = addArr.join(addSeparator);
    }

    let arr = Array(options.repeatTimes).fill(str + addition);
    let separator = options.separator ? options.separator : "+";
    return arr.join(separator);
};
  