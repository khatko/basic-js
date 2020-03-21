module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        arr.forEach(element => {
            let depth = 1;
            if (element instanceof Array) {
                depth += this.calculateDepth(element);
                if (depth > result) {
                    result = depth;
                }
            }
        });

        return result;
    }
};