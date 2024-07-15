/* 3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees. */

const items = [
    {
        name: "BMW",
        category: "CAR",
        priceUSD: 38000,
    },
    {
        name: "Iphone 14 Plus",
        category: "MOBILE",
        priceUSD: 899,
    },
    {
        name: "Google pixl6",
        category: "MOBILE",
        priceUSD: 299,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);
