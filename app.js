const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// middleware //
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0zqkm.mongodb.net/BlogApp?retryWrites=true&w=majority`).then(() => console.log("connected to db")).then(() => {
    app.listen(5000);
}).catch((err) => console.log(err))






// BookFair
// zm6hcelbMk7AATFg