const fs = require('fs')
// const fetch = import('node-fetch')

const axios = require('axios') 

const { URL } = require('../config')

const JOBS_FOLDER = 'model' 

const parsingJobs = async (req, res) => {
    try {
        // async function exist(path) {
        //     try {
        //         await fs.access(path)
        //         return true
        //     } catch (err) {
        //         return false
        //     }
        // }

        // if(!(await exist(`./${JOBS_FOLDER}`))) {
        //     await fs.mkdir(`./${JOBS_FOLDER}`, err => {
        //         console.log(err, 'folder')
        //     })
        // }

        fs.writeFile('./model/jobs.json', 'JSON.stringify(job, null, 4)', err => {
            if (err) throw err
            console.log('Successfully wrote file')
        });

        const options = {
            method: 'GET',
            url: URL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "User-Agent": "'api-test-agent' 'https://api.hh.ru/vacancies"
            }
            };

        const res = await axios.get(options)
        const json = res.json()
        consolee.log(json)


        // const jobs = require('../model/jobs') 

        // let job = {
        //     name: "New job",
        //     salary: 30000,
        //     companyName: "Oneapp"
        // }

        // // jobs.push(job)
        
        res.send(req.body)
    } catch (error) {
        console.log(error)
    }
}

// const getFetch = async (req, res) => {
// try {
//     const axios = require("axios");

//     const options = {
//     method: 'GET',
//     url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'authorization_code': 'grant_type=authorization_code&client_id=ETVQdMs2n9VKw7SMXkh9nX5H&client_secret=95dNjB8FmtxQsmygm6dtEy53&redirect_uri=http%3A%2F%2Fwww.example.com%2Foauth&code=29CtxMcaA8pRFDYyC8e8Gkm4'
//     }
//     };

//     axios.request(options).then(function (response) {
//         console.log(response.data.json());
//     }).catch(function (error) {
//         console.error(error);
//     });

//     res.send("ok")

// } catch (error) {
//     console.log(error)
// }
// }

module.exports = {
    parsingJobs,
    // getFetch
}