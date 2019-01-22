const app = require('./src/config/custom-express'),
    port = '3000';

app.listen(port, function () {
    console.log(`Servidor rodando na Porta ${port}`);
});