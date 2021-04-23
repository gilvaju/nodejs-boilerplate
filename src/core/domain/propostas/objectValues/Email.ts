import { Validacoes } from 'src/core/shared/Validacoes'

export class Email {
  private endereco: string
  constructor () {
    this.valida()
  }

  valida () {
    const validacoes = new Validacoes()
    validacoes.emailInvalido(this.endereco)
  }
}
