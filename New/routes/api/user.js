const express =require('express')

const router = express.Router()

const UserModel = require('../../model/user')

/**
 * Validation imports
 */
const loginValidation = require('../../schema/validation')

const signUpValidation = require('../../schema/signupValidation')

router.get('/signup', (req, res)=> {
  res.render('signup',{title:'Please enter the details and SignUp'})
})

router.post('/saveForm',async (req,res)=>{
  console.log(req.body)
  // sign up 
  // get req, connect to db , prepare insert query,insert the data, if success
  // return sucess else error

  const valid = await signUpValidation(req.body)
    // console.log(valid.error.details)
    if (valid.error) {
        res.render('signup', { alert: valid.error.details[0].message })
  }
    else {
      try {
        const result= await UserModel.saveNewUser(req.body)
        res.render('signup',{title:'Please enter the details and SignUp',message:'User Successfully Registered'})
    } catch (error) {
        // console.log(error)
        res.render('signup',{title:'Please enter the details and SignUp',alert:'Failed to add user ....'}) 
    }
      
  }
  
})

router.get('/login', (req, res)=> {
  res.render('login',{title:'Login screen'})
})

router.post('/login', async (req, res) => {
  console.log(req.body)


  const valid = loginValidation(req.body)
  try {
      console.log(valid)
      if (valid.error) {
          res.render('login', { message: valid.error.details[0].message })
    }
    
    
  const valid = loginValidation(req.body)

    console.log(valid)
    if (valid.error) {
      res.render('login',{ message : valid.error.details[0].message})
  }
    else {

      try {
        const result = await UserModel.getUserByEmail(req.body)
        console.log(result)
     
        if (result[0].password === req.body.password) {
          res.render('add_article')
        } else {
          res.render('login',{message:'Invalid Password'})
        }
      
    
      } catch (error) {
        res.render('login',{message:'Login Failed'})
        
      }
      
  }

})
module.exports = router;