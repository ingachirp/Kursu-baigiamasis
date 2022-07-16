import request from 'express';
import UserSchema from '../models/member.js';


export const getAll = async (request, response) => {
    try {
      const members = await UserSchema.find().populate('members').exec();
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Nesigavo pamatyti sąrašą',
      });
    }
  };
  
export const getOne = async (request, response) => {
    try {
      const memberId = request.params.id;
  
      UserSchema.findOneAndUpdate(
        {
          _id: memberId,
        },
        {
          $inc: { viewsCount: 1 },
        },
        {
          returnDocument: 'after',
        },
        (err, doc) => {
            
          if (!doc) {
            return response.status(404).json({
              message: 'vartotojas nerastas',
            });
          }
  
          response.json(doc);
        },
      ).populate('members');
        } catch (err) {
          console.log(err);
          response.status(500).json({
            message: 'Nesigavo rasti vartotoją',
          });
        }
    };
  
  export const remove = async (request, response) => {
    try {
      const memberId = request.params.id;
  
      UserSchema.findOneAndDelete(
        {
          _id: memberId,
        },
        (err, doc) => {
          if (err) {
            console.log(err);
            return response.status(500).json({
              message: 'nepasisieke panaikinti vartotoją',
            });
          }
  
          if (!doc) {
            return response.status(404).json({
              message: 'vartotojas nerastas',
            });
          }
  
          response.json({
            success: true,
          });
        },
      );
    } catch (err) {
      console.log(err);
      response.status(500).json({
        message: 'Nerado vartotojo',
      });
    }
  };
  
  export const update = async (request, response) => {
    try {
      const memberId = request.params.id;
  
      await UserSchema.updateOne(
        {
          _id: memberId,
        },
        {
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        age: request.body.age,
        },
      );
  
      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      response.status(500).json({
        message: 'Nepasisieke atnaujinti vartotoją',
      });
    }
  };