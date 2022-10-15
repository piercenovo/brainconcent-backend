const app = require('./src/app')

// Leer localhost de variables y puerto
const port = process.env.PORT || 7000
app.listen(port, () => console.log(`Server running on port ${port}`))
