import Entity from 'src/core/shared/Entity'
import IAgregateRoot from 'src/core/shared/IAgregateRoot'
import { Validacoes } from 'src/core/shared/Validacoes'

export class Pessoa extends Entity implements IAgregateRoot {
  constructor (id: string, identificador: string) {
    super(id, identificador)

    this.valida()
  }

  valida () {
    const validacoes = new Validacoes()
    validacoes.emailInvalido('')
  }
}
