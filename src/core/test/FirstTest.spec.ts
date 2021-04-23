import { Pessoa } from '@entities/pessoa'

test('Deve somar corretamente', () => {
  const pessoa: Pessoa = { name: 'Nome' }
  console.log(pessoa)
  const soma = 2 + 2
  expect(soma).toEqual(4)
})
