import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { join } from 'path'

dotenv.config() // carrega as variáveis de ambiente do arquivo .env

const dataBase = new DataSource({
  type: 'mongodb',//definir qual bd Usar
  database: process.env.DATABASE,
  entities: [
    join(__dirname, '..', 'entities/*.{ts,js}')
  ],
  logging: true, // log das queries executadas
  synchronize: true // cria as tabelas automaticamente
})

dataBase.initialize()
  .then(() => {
    console.log(`Banco de dados inicializado`);
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  })

export default dataBase