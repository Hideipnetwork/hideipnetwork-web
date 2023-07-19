export function HttpError(err, req, res, next) {
    if (
        err.status == 400 ||
        err.statusCode == 400
    ) {
        return res.json({ code: err.status || err.statusCode, msg: "Request Bad 400" })
    }

    if (
        err.status == 401 ||
        err.statusCode == 401
    ) {
        return res.json({ code: err.status || err.statusCode, msg: "Request auth 401" })
    }

    next();
}

export const Http500 = (err, req, res, next) => { res.status(500).send('Server 500') }
export const Http404 = (req, res, next) => {
    res.status(404).send('404 Not Found')
}