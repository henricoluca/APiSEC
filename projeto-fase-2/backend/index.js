import app from './src/routes/app.js'

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});