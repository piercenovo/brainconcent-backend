const app = require('./app')

// Leer localhost de variables y puerto
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 6000
app.listen(port, host, () => console.log(`Server running on port ${port}`))
