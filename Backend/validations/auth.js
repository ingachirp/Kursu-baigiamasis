import  validator  from 'express-validator';

export const registerValidation = [
    validator.body('email').isEmail(),
    validator.body('name').isLength({ min: 3}),
    validator.body('surname').isLength({ min: 2}),
    validator.body('age').isLength({ min: 2}),
]