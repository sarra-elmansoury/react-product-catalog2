const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "Powerful laptop",
    image: process.env.PUBLIC_URL + "/images/laptop.jpeg",
    inStock: true
  },
  {
    id: 2,
    name: "Phone",
    price: 800,
    description: "Smart phone",
    image: process.env.PUBLIC_URL + "/images/phone.jpeg",
    inStock: false
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    description: "Wireless headphones",
    image: process.env.PUBLIC_URL + "/images/headphones.jpeg",
    inStock: true
  }
];

export default products;