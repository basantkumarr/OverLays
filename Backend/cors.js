

module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://overlays-xi.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
};
