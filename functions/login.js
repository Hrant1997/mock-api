
module.exports = {
    /**
     * 
     * @param {import('http').IncomingMessage} dd 
     * @param {import('http').ServerResponse} res
     */
    logic: function (req, res) {
        // logic for data manipulation comes here
        if (req.query?.email === 'player@r1se.com' && req.query?.password === 'pa11w0rd!') {
            res.status = 200
        } else {
            res.status = 401
            res.data = { status: false }
        }
    },

    request: {
        method: "POST",
        urlPath: "/login"
    },
    response: {
        status: 200,
        inlineData: {
            status: true
        },
    },
};