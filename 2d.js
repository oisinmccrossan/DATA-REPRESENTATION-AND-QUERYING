// Define a constant array 'ages' with the values 25, 31, 42, and 77
const ages = [25, 31, 42, 77];

// Use the 'map' method on the 'ages' array to create a new array 'a'
// The 'map' method applies the provided arrow function to each element in the 'ages' array
let a = ages.map(
    (item) => {
        // If the current item is less than 70, return the item multiplied by 2
        if (item < 70)
            return item * 2;
        // Otherwise, return the item as is
        else 
            return item;
    }
);

// Log the new array 'a' to the console
console.log(a);
