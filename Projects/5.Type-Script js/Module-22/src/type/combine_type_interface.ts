

type userRole = "Admin" | "User" | "Moderator" | "Guest" ;

interface User  {
    name : string;
    role : userRole; // here user can select the Role using type 
    email :string;

}

interface Admin extends User {
    permissions : string[];
}

interface Moderator extends User {
    ModeratedSections : string[];
}

const bigBoss : Admin = {
    name : "BigBoss",
    role : "Admin",
    email : "bigbose@gmail.com",
    permissions : ["manage_users","edit_content"],
}