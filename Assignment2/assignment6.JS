const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

// OUTPUT:
// Below are the product details
// name: Apple 2020 MacBook Air Laptop
// price: 82000
// color: Grey
// hardDisk: 256 GB

console.log(`Below are the product details`);
for (const keys of Object.keys(productDetails)) {
    console.log(`${keys} : ${productDetails[keys]}`);
}