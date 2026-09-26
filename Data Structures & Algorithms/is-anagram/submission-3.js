class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean} true or false
     * can I use a frequency counter and if all values share the same number of appearances  return true?
     * need an object, for in loop, compare count of s values to count of t values 
     */
    isAnagram(s, t) {
        let sVals = {};
        let tVals = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let sval of s) {
            if (sVals[sval]) {
                sVals[sval]++;
            } else {
                sVals[sval] = 1;
            }
        }
        for (let tval of t) {
            if (tVals[tval]) {
                tVals[tval]++;
            } else {
                tVals[tval] = 1;
            }
        }

        for (let vals in sVals) {
            if (sVals[vals] !== tVals[vals]) {
                return false;
            }
        }
        return true;
    }
}
