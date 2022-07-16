import  validator  from 'express-validator';

export const registerValidation = [
    validator.body('email', 'neteisingai įvestas el. paštas').isEmail(),
    validator.body('name', 'vardas turi būti minimum 2 ženklai').isLength({ min: 3}),
    validator.body('surname', 'pavarde turi būti ilgesne už 2 simbolius').isLength({ min: 2}),
    validator.body('age', 'neteiingai įvestas amžius').isLength({ min: 2}),
]