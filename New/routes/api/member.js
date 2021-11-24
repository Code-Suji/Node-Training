const express =require('express')

const members = require('../../model/member')

const router = express.Router()

router.get("/", (req, res) => {
    console.log(`Inside api members ...`);
    res.json(members.getAll());
  });
  
  router.get("/:id", (req, res) => {
    const id = req.params.id * 1;
    const result = members.getMemberById(id);
    if (result.length > 0)
      res.status(200).json({
        message: `Member with id : ${req.params.id} found `,
        data: result,
        status: "Success",
      });
    else
      res.status(400).json({
        message: `Member with id : ${req.params.id} not found `,
        data: null,
        status: "Fail",
      });
  
    console.log(`Inside api members ...`);
  });

  module.exports = router