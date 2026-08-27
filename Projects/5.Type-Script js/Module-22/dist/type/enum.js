"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Webnesday"] = 2] = "Webnesday";
    Day[Day["Thrusday"] = 3] = "Thrusday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
let offDay = Day.Sunday; // Here we directly access the enum data without call enum set
if (offDay === Day.Sunday || offDay === Day.Friday) {
}
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// Here we use key name and varibale same name again use but not warning because of enum
const nandu = {
    name: "chndu",
    role: Roles.Admin,
    moderator: Roles.Moderator
};
console.log(nandu);
//# sourceMappingURL=enum.js.map