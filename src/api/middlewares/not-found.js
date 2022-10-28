export const notFound = (req, res, next) => {
  res.status(404)
  return res.json({
    status: 404,
    error: 'Not found'
  })
}
