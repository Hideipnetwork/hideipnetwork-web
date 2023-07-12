function handle500(err, req, res, next) {
    res.status(500).send('Server 500')
}

export {
    handle500
}