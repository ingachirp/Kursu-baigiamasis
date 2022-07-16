import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import validator from 'express-validator';
import UserModel from './models/member.js';
import { getAll, getOne, remove } from './validations/memberDB.js';



const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

  mongoose
  .connect('mongodb+srv://IngridaVIGI13:byuhblf77@cluster0.eipbj.mongodb.net/CCenter?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

   app.post('/auth/register', registerValidation, (request, response) => {
      const errors = validator.validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json(errors.array());
      }  
          
       const doc = new UserModel({
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        age: request.body.age,
      });

      const member = doc.save();

      response.json({
        success: true,
      });
  });

  app.get('/members', getAll);
  app.get('/members/:id', getOne);
  app.delete('/members/:id', remove);
  app.patch(
  '/members/:id',
  ); 

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
