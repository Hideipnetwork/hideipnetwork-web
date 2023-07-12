function handle401(req, res, next) {
    res.status(401).send('UnauthorizedError 401')
}

export {
    handle401
}