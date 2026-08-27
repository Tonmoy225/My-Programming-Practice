"use strict";
// // Normal function :
Object.defineProperty(exports, "__esModule", { value: true });
// function useState (initialValue){  
//     let value = initialValue;
//     return value ;
// }
// const counter = useState(0);
// Normaml Function call : 
function userState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue]; // call inner function variable using outer function value
}
const [counter, setCounter] = userState(0);
// Using Generic function : for safty check variable type or maitains static
function useState(initialValue) {
}
useState("0"); // If we set string or number or boolean in the <> to set in function call in typescript
useState({ email: " ", isLoggedIn: false });
useState(null);
//# sourceMappingURL=generics_advance.js.map