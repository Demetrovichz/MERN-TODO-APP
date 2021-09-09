const {Router} = require('express')
const router = Router()
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
router.post('/login',  
  [
    check('email', 'Неккорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({min: 6})
  ]
,
async (req,res)=>{
  try {
    const errors = validationResult(req)
      if(!errors.isEmpty()) return res.status(400).json({errors:errors.array(), message:'Некоректные данные при регистрации.'})
    const {email, password} = req.body;
    console.log(email, password)
    const isUsed= await User.findOne({email})
    if(isUsed) return res.status(300).json({message:'Данный email уже есть , воспользуйтесь другим.'})
    
    const hashed = await bcrypt.hash(password,12);
    const user = new User({email,password:hashed})
    await user.save()
    res.status(201).json({message:'Пользователь создан'});
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;