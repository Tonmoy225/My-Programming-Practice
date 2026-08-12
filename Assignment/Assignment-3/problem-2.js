function filterActiveUsers(users) {
    // Write your code here

    if(!Array.isArray(users) || users.length === 0){
        return "Invalid";
    }

    const everyUserHasIsActive = users.every((user) => user?.isActive !== undefined);
    if( !everyUserHasIsActive){
        return "Invalid";
    }

    return users.filter((user) => user.isActive === true );

    
}