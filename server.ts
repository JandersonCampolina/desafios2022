import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(express.json());

// Versionamento de endpoint
app.use("/v1", routes);

app.listen(PORT, () => console.log(`Servidor iniciado ${PORT}`))
