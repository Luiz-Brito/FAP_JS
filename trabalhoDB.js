/* --------------------------------- PASSOS -----------------------------------------
1 - Na pasta root do é necessário criar um projeto em node com o comando npm init -y.

2 - Instalar as dependencias com o comando npm i sequelize mysql2.

3 - Criar um arquivo db.js para poder criar a conexão com o database com o seguinte código:

4 - Para teste de conexão criar o arquivo index.js com o seguinte código:

5 - Executar o arquivo index.js com node index.js.
*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('company', 'manager', 'manager', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;



const database = require('./db');

(async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
        database.close();
    }
})();

