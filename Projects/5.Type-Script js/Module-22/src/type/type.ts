
type Gender = "Male | Female | Other "
type  Student = {  //you can create your own type aliases using the "type " keyword .
    name : string ;
    roll : number ;
    major : string ;
    gpa : number ;
    gender?: Gender;
};


const robin :Student = { // Here  we declear the type as a Student which start Capital Later "S", Beacuse skip confusion between Type and varible declear
    name : "Robin",
    roll : 1 ,
    major : "CSE" ,
    gpa : 3.8 ,
};

const sobin :Student = {
    name : "Sobin",
    roll : 2 ,
    major : "CSE" ,
    gpa : 3.5 ,
};

