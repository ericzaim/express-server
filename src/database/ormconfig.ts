import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { join } from 'path'

dotenv.config() // carrega as variáveis de ambiente do arquivo .env

const dataBase = new DataSource({
  type: 'postgres',
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),

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