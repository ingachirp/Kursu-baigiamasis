import request from 'express';
import UserSchema from '../models/member.js';


export const getAll = async (request, response) => {
    try {
      const members = await UserSchema.find().populate('user').exec();
      response.json(members);
    } catch (err) {
      console.log(err);
      response.status(500).json({
        message: 'Nesigavo pamatyti sąrašą',
      });
    }
  };
  
export const getOne = async (request, response) => {
    try {
      const name = request.params.name;
      const surname = request.params.surname;
  
      UserSchema.find(surname,'surname').exec();
      (err, user) => {
            
          if (!user) {
            return response.status(404).json({
              message: 'vartotojas nerastas',
            });
          }
  
          response.json(members);
        },
      UserSchema.populate('user');
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
        (err, user) => {
          if (err) {
            console.log(err);
            return response.status(500).json({
              message: 'nepasisieke panaikinti vartotoją',
            });
          }
  
          if (!user) {
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
  
      response.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      response.status(500).json({
        message: 'Nepasisieke atnaujinti vartotoją',
      });
    }
  };