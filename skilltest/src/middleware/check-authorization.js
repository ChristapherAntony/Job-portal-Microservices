const checkAuthorization = (role) => (req, res, next) => {

  if (!req.currentUser || req.currentUser.role !== role) {
    console.log('via inside if');
    return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] });
  }
  next();
};

export { checkAuthorization };
