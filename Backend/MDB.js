import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import validator from 'express-validator';
import UserModel from './models/member.js';
import { getAll, getOne, remove, update } from './validations/memberDB.js';



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
  app.patch('/members/:id',update); 

  app.listen(9000, () => {
    console.log('Serveris paleistas. Laukia užklausų', 9000);
  });

  

  