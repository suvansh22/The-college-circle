const { Router } = require('express')
const backendrouter = require('./backend')
const express = require('express')
const router = express.Router()

router.post('/collegeregistrationform',backendrouter.collegeRegistraion)
router.post('/staffregistrationform',backendrouter.staffRegistration)

module.exports = router