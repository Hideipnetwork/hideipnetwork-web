function handle404(req, res, next) {
    res.status(404).send('404 Not Found')
}

export {
    handle404
}