//.js File

/*

Using array related method (not a for loop)

let business = { name : "abc",

display_phone : "(518) 123-4567",

} ;

*/

function filterPhoneBook(json) {

    let results = new Array(json['businesses']["name"]["display_phone"]);

    return results;

}

//Using array related method (not a for loop)

//returns all the business with a rating >= params

//only the name, display_phone and rating properties are returned in the

//returned objects

function filterRating(params, json) {

    let results = new Array(json["businesses"]);
    results = results.filter(element => element.rating >= params)

    return results;

}

//Using array related method (not a for loop)

//return true/false if you find a business

//with the attributeName = params

function exists(attributeName, params, json) {
    let results = new Array(json["businesses"]);
    if (attributeName in results) {
        return true;
    }
    else {
        return false;
    }

}

//Using array related method (not a for loop)

//change the price to be the number of $, instead of multiple $

//$=1, $$=2, ...

//only the name, display_phone and price properties are returned in the

function transformPrice(json) {

    let results = new Array(json);
    let index = results.findIndex(x => x["price"] === "$$");
   
        results[index]["Username"] = "$"
    
    return results;

}

//Using array related method (not a for loop)

//change the price to be the number of $, instead of multiple $

//$=1, $$=2, ...

//sort the business in descending order of price

//only the name, display_phone and price properties are returned in the

function sortByPriceDesc(json) {

    let results = new Array(json);

    return results;

}