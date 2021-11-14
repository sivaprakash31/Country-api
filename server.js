const app = require('./app');

const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Server is up and Running at PORT ${PORT}`)
});