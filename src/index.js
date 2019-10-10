module.exports = function check(str, bracketsConfig) {
    var isSplittable = true;

    while (isSplittable) {
        isSplittable = false;

        for (var i = 0; i < bracketsConfig.length; i++) {
            var strCut = str.split(bracketsConfig[i][0] + bracketsConfig[i][1]);

            if (strCut.length > 1) {
                isSplittable = true;
                str = strCut.join('');
            }
        }
    }
    return !str;
};






