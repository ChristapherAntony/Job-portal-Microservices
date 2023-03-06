const checkAuthorization = (role) => {
    return (req, res, next) => {
        if (!req.currentUser || req.currentUser.role !== role) {
            return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] })
        }
        next()
    }
}


module.exports = { checkAuthorization };