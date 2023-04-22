const fs = require('fs')

const parsingJobs = async (req, res) => {
    try {
        // console.log(req.body)
        const jobs = require('../model/jobs') 

        let job = {
            name: "New job",
            salary: 30000,
            companyName: "Oneapp"
        }

        // jobs.push(job)
        fs.writeFile('./model/jobs.json', JSON.stringify(job, null, 4), err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        res.send(req.body)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    parsingJobs
}