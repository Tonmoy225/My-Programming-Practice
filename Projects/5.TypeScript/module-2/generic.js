"use strict";
// Normal Concept :  
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transection Successful", // only accept the string becasue the <> are declear as string 
    status: 200,
};
const transactionStatus = {
    data: false,
    status: 200,
};
const transactionStatusVew = {
    data: 403,
    status: 200,
};
// Array declear in generic :
function getlength(array) {
    return array.length;
}
getlength([33, 4, 1]);
//# sourceMappingURL=generic.js.map