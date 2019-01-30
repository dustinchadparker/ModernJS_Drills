

let favMovie = (movie = "The Room", name = "world") => console.log(`My name is ${name} and my favorite movie is ${movie}.`);

favMovie("Good Will Hunting", "Charlie");
favMovie();

let getFirstName = (fullName) => { 
    console.log(fullName.split(' ', 1));

}

let getFirstNameSecond = fullName => console.log(fullName.split(' ', 1));

getFirstName("Charlie Gibson");
getFirstNameSecond("Charlie Gibs");


let literals = (num1, num2) =>  ({

    exponent: num1^num2,
    product: num1 + num2,


});

let result = literals(1, 4);
console.log(`${result.exponent}`);
console.log(`${result.product}`);

let getStuff = (name, location, food) => {
    console.log(name);
    console.log(location);
    console.log(food);

}

let arr = ["Charlie", "Birmingham", "Donuts"];
getStuff(...arr);


let whateverYoudLike = (name1) => {
    let spreadName = [...name1];
    
    for(i=0; i<spreadName.length; i++) {
        console.log(spreadName[i]);
    }
}

let myName = "Charlie";
whateverYoudLike(myName);



// let fruits = ["apples", "oranges", "pineapples"];
// let leastFavFruit = fruits[1];

// function firstFruit () {

//     let faveFruit = fruits[2];
//     console.log(fruits[0]);
    
//     favFruit();
    
//     function favFruit() {
//         console.log(faveFruit);
//     }
    
    
//     console.log(leastFavFruit);
 

// }

// whateverILike();
// function whateverILike() {
//     console.log("Hello, Chad.");
// }


// let newFunc = function() {
//     alert("Some text of my choosing.");

// }
// newFunc();

// firstFruit();