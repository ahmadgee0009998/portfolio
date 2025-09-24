let original = {
  name: "Ahmad",
  address: { city: "Lahore", country: "Pakistan" }
};

// Shallow copy using spread
let shallowCopy = { ...original };

shallowCopy.name = "Ali"; 
shallowCopy.address.city = "Karachi";

console.log(original.name);        // "Ahmad" (not affected)
console.log(original.address.city); // "Karachi" (changed in both!)

// let original = {
//   name: "Ahmad",
//   address: { city: "Lahore", country: "Pakistan" }
// };

// // Deep copy using JSON
// let deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.name = "Ali";
// deepCopy.address.city = "Karachi";

// console.log(original.name);        // "Ahmad" (not affected)
// console.log(original.address.city); // "Lahore" (not affected)
