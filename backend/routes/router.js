const { Router } = require('express')
const backendrouter = require('./backend')
const express = require('express')
const router = express.Router()
const multer = require("./schema/multer")


router.post('/collegeregistrationform',backendrouter.collegeRegistraion)
router.post('/staffregistrationform',backendrouter.staffRegistration)
router.get('/getcollegeregistrationform/:id',backendrouter.getcollegeregistration)
router.delete('/deletecollegeregistration/:id',backendrouter.deletecollegeRegistration)
router.get('/approvecollegeregistration/:id',backendrouter.approvecollegeRegistration)
router.post('/login',backendrouter.login)
router.post('/addpost',backendrouter.addpost)
router.get('/getpost/:name',backendrouter.getpost)
router.post('/addcompany', multer.single('img'),backendrouter.addcompany)
router.get('/getcompany/:name',backendrouter.getcompany)
router.get('/getcollegename',backendrouter.getCollegename)

module.exports = router