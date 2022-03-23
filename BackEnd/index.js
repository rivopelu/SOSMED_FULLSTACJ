const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/post')

// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import postRoutes from './routes/post.js'

const app = express()

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());




const CONNETION_URL = 'mongodb+srv://rivopelu:rivopelu123@cluster0.cuxpa.mongodb.net/sosmed?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNETION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`server telah berjalan di : ${PORT}`)))
    .catch((error) => console.log(error.message));

    // mongoose.set("useFindAndModify", false);