const config = require('./src/config')
const app = require('./src/app')

// Leer localhost de variables y puerto

app.listen(config.port, () => console.log(`Server running at http://${config.host}:${config.port}...`))
