const {Router, response} = require('express')
const router = Router()
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

router.post('/registration',  
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
router.post('/login',  
  [
    check('email', 'Неккорректный email').isEmail(),
    check('password', 'Некорректный пароль').exists()
  ]
,
async (req,res)=>{
  try {
    const errors = validationResult(req)
      if(!errors.isEmpty()) return res.status(400).json({errors:errors.array(), message:'Некоректные данные при входе.'})
      const {email, password} = req.body;
      const user = await User.findOne({email})
      if(!user) return res.status(400).json({message:'Пользователь не найден.'})
      const isMatch = bcrypt.compare(password, user.password)
      if(!isMatch) return res.status(400).json({message:"Данные не верны."})
      const jwtSecret = '1fgdsfds7s4vsd759sahbfd7857'
      const token = jwt.sign(
          {userId:user.id},
          jwtSecret,
          {expiresIn: '1h'}
        
      )

      res.status(201).json({message:"Вы успешно зашли"})
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;