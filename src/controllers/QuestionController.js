module.exports = {
    index(req, res) {
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.params.password

        console.log(
            `room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`
        )
    }
}