

enum Day {
    Monday,
    Tuesday,
    Webnesday,
    Thrusday,
    Friday,
    Saturday,
    Sunday,
}

let offDay = Day.Sunday   // Here we directly access the enum data without call enum set

if (offDay === Day.Sunday  || offDay === Day.Friday){

}

enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator',
}

console.log(Roles.Admin) 
 // Here we use key name and varibale same name again use but not warning because of enum


 const nandu  = {
    name : "chndu",
    role : Roles.Admin,
    moderator : Roles.Moderator
 }

 console.log(nandu);