export const globalError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    if (process.env.NODE_ENV == 'development') {

    }
}
export const sendErrorForDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}
export const sendErrorForProd = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}