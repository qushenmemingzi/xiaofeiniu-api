const express = require('express')
const router = express.Router()
var pool = require('../../pool')

// /admin/settings
router.get('/',(req,res)=>{
  pool.query("SELECT * FROM xfn_settings",(err,result)=>{
    if(err) throw err
    res.send(result[0])
  })
})

module.exports = router