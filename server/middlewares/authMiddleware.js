const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies?.uid;

  if (!token) return res.status(401).json({ error: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user data
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid or expired" });
  }
};
