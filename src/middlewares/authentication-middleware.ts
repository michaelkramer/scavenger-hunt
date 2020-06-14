const authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json("Not allowed");
};

export default authenticationMiddleware;
