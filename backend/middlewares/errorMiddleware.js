function errorMiddleware(err, req, res, next) {
    console.error(err.stack); 

    // check for prisma error
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    return res.status(500).json({ error: "Something failed." });
  }
  
  module.exports = errorMiddleware;
  