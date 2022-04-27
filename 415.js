/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    let result = "";

    const maxLength = num1.length > num2.length ? num1.length : num2.length;

    let carry = 0;
    for (let i = 0; i < maxLength; i++) {
        let sum = 0;
        let val = 0;
        sum += num1[i] ? +num1[i] : 0;
        sum += num2[i] ? +num2[i] : 0;

        sum += carry;
        carry = 0;

        if (sum >= 10) {
            val = sum % 10;
            carry = 1;
        } else {
            val = sum;
        }

        result += val.toString();
    }
    
    if (carry != 0) {
        result += carry.toString();
    }

    return result.split("").reverse().join("");
};

console.log(addStrings("9333852702227987", "85731737104263"));