const express = require('express')
const router = express.Router()

const { parsingJobs } = require('../controller/parserController')

router.post('/post', parsingJobs)

module.exports = router