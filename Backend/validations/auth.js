import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail(),
    body('name').isLength({ min: 3}),
    body('surname').isLength({ min: 2}),
    body('age').isLength({ min: 2}),
]