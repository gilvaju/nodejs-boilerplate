const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const fetch = require('node-fetch')
const PORT = process.env.PORT || 3000

// mutation {
//   criarPessoa(email: "teste2@teste.com") {
//     id
//     email
//     identificador
//     nome
//   }
// }

app.use(bodyParser.json())

const HASURA_OPERATION = `
mutation criarPessoa($email: String) {
  insert_pessoas_one(object: {email: $email, identificador: "cpf", nome: "Gilvan Jr"}) {
    id
    email
    identificador
    nome
  }
}
`

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    'https://comigo-core.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 't91mwtjN63V6oRCRO7N1VNdzIwbZpPbHuu2GELr7jpVgmA2ZXPkBxQz2Fx12wrzV'
      },
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  )
  const data = await fetchResponse.json()
  console.log('DEBUG: ', data)
  return data
}

// Request Handler
app.post('/criarPessoa', async (req, res) => {
  // get request input
  const { email } = req.body.input
  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({ email })
  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }
  // success
  return res.json({
    ...data.insert_pessoas_one
  })
})

app.get('/', async (req, res) => {
  return res.json({
    hello: 'world'
  })
})

app.listen(PORT)
