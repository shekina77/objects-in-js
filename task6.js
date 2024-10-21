var person={
    firstName:"ravi",
    lastName:"somu",
    age:30
};
console.log(person.firstName);
person.city="New York";
console.log(person);

var product={
    name:"laptop",
    price:1000,
    insStock:true,

};
console.log(product)
product.price=1200;
console.log(product)
delete product.insStock;
console.log(product)

var library={
    fantasy:["harry potter","few lines from mother diary"],
    mystery:["sherlock holmes","gone girl"
    ]
};
console.log(library)
library.sciencefiction=["dune","foundation"];
console.log(library)
console.log(library.fantasy[0]);
delete library.mystery;
console.log(library);

var user={
    username:"katipally",
    email:"katipally@gmail.com",
    address:{
        city:"hyderabad",
        state:"telangana",
        zip:"503111"
    }
};
console.log(user)
Object.freeze(user)
user.email="new@gmail.com"
console.log(Object.isFrozen(user))
console.log(user)
user.phone=9876543211;
console.log(user)

var car={
    make:"maruthi",
    model:"carolla",
    price:200000
};
console.log(car)
Object.seal(car)
delete car.make,
console.log(car)
console.log(Object.isSealed(car))
car.price=350000,
console.log(Object.isExtensible(car))

const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };
  console.log(store.products.groceries.vegetables.spinach.stock)
  console.log(store.products.electronics.laptops.hp.Pavilion15.price)
  
  