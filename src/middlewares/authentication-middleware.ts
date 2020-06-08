const authenticationMiddleware = (req, res, next) => {
  console.log("==> isAuthenticated", req.isAuthenticated());
  console.log("==> authMiddle user", req.user);
  if (req.isAuthenticated()) {
    return next();
  }
  return res.json("Not allowed");
};

export default authenticationMiddleware;
