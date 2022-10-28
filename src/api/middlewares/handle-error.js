export const handleError = (error, req, res, next) => {
  res.status(error.status || 500)
  return res.json({
    message: error.message || 'failed: not known error',
    stack: error.stack
  })
}
