import express, { Request, Response } from 'express'

const server = express()

server.get('/', (request: Request, response: Response) => {
  // const pessoa: Pessoa = { name: 'Teste' }
  // console.log(pessoa)
  return response.status(200).json({ message: 'Tudo ok!' })
})

server.listen(3333)
