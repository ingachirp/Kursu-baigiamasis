require('dotenv').config();
const cors = require('cors');
const { request, response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
import { registerValidation } from './validations/auth.js';
import validationResult from 'express-validator';


const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// const {
//     MongoClient,
//     ServerApiVersion,
//     ObjectId,
//   } = require('mongodb');
// const cli = require('nodemon/lib/cli');
  
//   const uri = 'mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   });
  mongoose
  .connect('mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

  app.post('/auth/register', registerValidation, (request, response) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json(errors.array());
      }

      response.json({
        success: true,
      });
  });

  app.listen(9000, () => {
    console.log('Serveris paleistas. Laukia užklausų', 9000);
  });

  app.get('/', (request, response) => {
    response.send('Hello world');
  });

  app.get('/members', (request, response) => {
    client.connect(async () => {
    console.log();
      const database = client.db('CCenter');
      const collection = database.collection('members');
      const result = await collection.find({}).toArray();
  
      response.json(result);
  
      client.close();
    });
  });

  app.get('/count/:surname', (request, response) => {
    client.connect(async () => {
    console.log();
      const database = client.db('CCenter');
      const collection = database.collection('members');
      const mSurname = Number(request.params.surname);
      const result = await collection
      .aggregate([
        { $match: { surname: request.params.surname } },
        { $group: { _id: "$surname", mailEmail: { $sum: "$email" } } },
      ])
      .toArray();
  
      response.json(result);
  
      client.close();
    });
  });

  // app.patch("/knygos", (request, response) => {
  //   client.connect(function(err, client) {
  //     if (err) {
  //       response.send("Something went wrong!!");
  //       client.close();
  //     } else {
  //       const database = client.db("DB_CRUD");
  //       const collection = database.collection("knygos");
  //       const { _id, bookTitle, bookPageCount, bookPrice, bookAuthor } = request.body;
  //       // const _id = req.body._id;
  //       // const name = req.body.name;
  //       const filter = { _id: ObjectId(_id) };
  //       const newValues = { $set: { pageCount: bookPageCount, author: bookAuthor } };
  //       collection.updateOne(filter, newValues, function (err, result) {
  //           if (err) {
  //             response.send("Something went wrong!!");
  //             client.close();
  //           } else {
  //             response.send(result);
  //              client.close();
  //           }
  //         });              
  //       }
  //   });
  // });

  // app.put("/knygos", (request, response) => {
  //   client.connect(function(err, client) {
  //     if (err) {
  //       response.send("Something went wrong!!");
  //       client.close();
  //     } else {
  //       const database = client.db("DB_CRUD");
  //       const collection = database.collection("knygos");
  //       const { _id, bookTitle, bookPageCount, bookPrice, bookAuthor } = request.body;
  //       const filter = { _id: ObjectId(_id) };
  //       const newValues = { title: bookTitle, pageCount: bookPageCount, price: bookPrice, bookAuthor: author };
  //       collection.replaceOne(filter, newValues, function (err, result) {
  //           if (err) {
  //             response.send("Something went wrong!!");
  //             client.close();
  //           } else {
  //             response.send(result);
  //              client.close();
  //           }
  //         });              
  //       }
  //   });
  // });
