class restaurantManager {
  restaurantList = [
    { id: 1, restaurantName: "KFC", address: "Anand Vihar", city: "Delhi" },

    {
      id: 2,
      restaurantName: "Dominos",
      address: "Near LIC Bank",
      city: "Bangalore",
    },

    {
      id: 3,
      restaurantName: "Maharashtrian Tadka",
      address: "Near BKC Complex",
      city: "Mumbai",
    },

    {
      id: 4,
      restaurantName: "The ShantaSons",
      address: "Gandhinagar",
      city: "Dombivali",
    },

    {
      id: 5,
      restaurantName: "The China Town",
      address: "Marine Lines",
      city: "Worli",
    },
  ];

  printAllRestaurantNames = () => {
    for (let resto of this.restaurantList) {
      console.log(resto.restaurantName);
    }
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter((resto) => resto.city == cityName);
  };
}

// To access the class we need to create an object of that class to have access to all functions of that class------important
// classes and objects will go hand in hand

const restaurantObject = new restaurantManager(); // Object we have created for restaurant manager class

restaurantObject.printAllRestaurantNames();

const filterOut = restaurantObject.filterRestaurantByCity("Delhi");
console.log(filterOut);

orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

//1
const values = Object.values(orderData);
console.log(values);

const total = values.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(total);

//2

const range = Object.keys(orderData);
console.log(range);
console.log(` Count of above keys : ${range.length}`);

//3
let arr = [];
const response = range.map((item, index) => {
  const obj = {
    id: index + 1,
    order: item,
    orderpercentage: ((orderData[item] / total) * 100).toFixed(2),
    restaurant: "Punjabi Tadka",
  };
  arr.push(obj);
});

console.log(arr);

// .............................................Completed.................//
