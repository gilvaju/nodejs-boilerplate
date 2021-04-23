export class Validacoes {
  emailInvalido (email: string): Error {
    throw new Error('Teste de "Assertion Concern"')
  }
}
