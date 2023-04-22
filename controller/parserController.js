const parsingJobs = async (req, res) => {
    try {
        res.send("ok")
    } catch (error) {
        console.log({ message: error.message })
    }
}

module.exports = {
    parsingJobs
}