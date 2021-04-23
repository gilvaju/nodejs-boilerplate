import IEntity from './IEntity'

export default abstract class Entity implements IEntity {
  public readonly id: string
  public readonly identificador: string

  constructor (id: string, identificador: string) {
    this.id = id
    this.identificador = identificador
  }

  valida () {
    // return {} as Error
  }
}
