


function topRatedRestaurant(restaurants) {

    if(!Array.isArray(restaurants) || restaurants.length === 0 ){
        return "Invalid";
    }
    let bestRestaurant = restaurants[0];

    for(let restaurant of restaurants){

        if ( restaurant.rating > bestRestaurant.rating){
            bestRestaurant = restaurant;
             return bestRestaurant.name.toUpperCase();


        }
        else{
            return bestRestaurant.name.toUpperCase();
        }
        
       
    }
    if(restaurants.length === 1){
        return restaurants[0].name.toUpperCase();
    }



}

// const topRes = topRatedRestaurant([{"name":"Chillox","rating":4.5},{"name":"Sultan's Dine","rating":4.8}])

// const topRes = topRatedRestaurant([{"name":"Burger King","rating":3.9}]);
const topRes = topRatedRestaurant([{"name":"Takeout","rating":5},{"name":"Madchef","rating":4.7}]);
console.log(topRes);