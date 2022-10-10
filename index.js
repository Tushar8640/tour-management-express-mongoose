const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = require("./app");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pem0irl.mongodb.net/?retryWrites=true&w=majority`
// database connection
mongoose.connect(uri).then(()=>{
  console.log(`Database connection is successful  🛢`);
})


// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});