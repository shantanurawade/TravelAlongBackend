import HttpStatus from 'http-status-codes'
export const register = (req, res, next) => {
    console.log(req.body.email)
    if (req.body.mobile && req.body.password && req.body.firstName && req.body.lastName) next();
    else res.status(HttpStatus.BAD_REQUEST).send({
        'message': 'Please fill all mandatory fields.'
    })
}
export const login = (req, res, next) => {
    console.log(req.body.email)
    if (req.body.email && req.body.password) next();
    else res.status(HttpStatus.BAD_REQUEST).send({
        'message': 'Please fill all mandatory fields.'
    })
}
