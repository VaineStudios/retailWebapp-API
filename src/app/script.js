const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");

mongoose.connect(
   "mongodb+srv://admin:amber123@sunkentreasures.gsnv3.mongodb.net/SunkenTreasures?retryWrites=true&w=majority"
);
//    .then(() => console.log("MongoDB Connected"))
//    .catch((err) => console.log(err));
run();

async function run() {
   try {
      //    this is another way of creating a new user
      //   const user = new User({ name: "Dawnz", age: 23 });
      //   await user.save();

      //   this is the standard way using .create
      //  Testing Creation of User
      // const user = await User.create({
      //    fname: "Damian",
      //    lname: "Green",
      //    username: "Dawnz",
      //    email: "dawnz1@hotmail.com",
      //    profileImg: "test",
      //    isSeller: false,
      //    cart: {
      //       orderItem: [],
      //       totalCost: 0,
      //    },
      // });

      //Testing Creation of Product (Requires User in seller ID)
      // const product = await Product.create({
      //    name: "Bag Juice",
      //    price: 10,
      //    productType: "Refreshment",
      //    productImage: {
      //       image: "bagjuice.jpg",
      //       featured: false,
      //    },
      //    condition: "Cold",
      //    description: "Ice Cold bag Juice 10 dalla",
      //    sellerId: "61df4c2a156694fb3b8879ea",
      //    inventory: 10,
      // });
      // const cart = await Cart.create({
      //    totalCost: 0,
      // });

      //  how to query..use find as it goes through validation
      // const results = await Product.find({ _id: "61df4c7c37e1a57a35159778" });

      // how to use the populate method to simulate a "Join"
      const join = await Product.where("sellerId") // checks for key "sellerId in Products"
         .exists() // checks if this key exists(boolean)
         .populate("sellerId"); // populates the User object that was stored
      console.log(join);
   } catch (e) {
      console.log(e.message);
   }
}
