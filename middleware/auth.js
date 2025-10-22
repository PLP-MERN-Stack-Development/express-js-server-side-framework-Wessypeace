// middleware/auth.js
function auth(req, res, next) {
  const apiKey = req.query['x-api-key'];

  if (apiKey === '12345') {
    next(); // allow the request
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }
}

module.exports = auth;
