/**
 * Métodos HTTP:
 * GET: Buscar uma  informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * 
 * 
 * Tipos de parâmetros:
 * Query: Parâmetros nomeados enviados na rota após "?"  (filtros, paginação)
 * Rote: Parâmetros utilizados para identificar recursos
 * Request body:  Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
