const { Router } = require('express')
const express =require('express')

const router = express.Router()

const todoModel = require('../../model/todo')

router.get('/', (req,res) => {
  res.render('todo')
})


router.post('/add', async (req, res) => {
  console.log(req.body)
  try {
      await todoModel.addItem(req.body)
      const result= await todoModel.getItems()
      console.log(result)
      res.render('todo',{message:'Item added Successfully',itemList : result})
          // res.render('todo',{alert:'Failed to add item ....'}) 
    } catch (error) {
        console.log(error)
        res.render('todo',{alert:'Failed to add item ....'}) 
    }

})
router.get('/view',async (req, res) => {
  console.log(req.body)
  try {
    const result= await todoModel.getItems()
    console.log(result)
    res.render('todo',{itemList : result})
    } catch (error) {
        console.log(error)
        // res.render('todo',{alert:'Failed to add item ....'}) 
    }

})



module.exports = router;