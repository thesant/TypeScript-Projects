export abstract class DioAccount {
  private readonly _name: string
  private readonly _accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this._name = name
    this._accountNumber = accountNumber
  }

  setName = (name: string): void => {
    throw new Error('O atributo name não pode ser acessado diretamente.')
  }

  getName = (): string => {
    return this._name
  }

  deposit = (valor): void => {

    if (this.validateStatus()) {
      if (valor < 0) {
        throw new Error('O valor de depósito precisa ser maior que zero')
      }
      this.balance = this.balance + valor
      console.log('Voce depositou')
    }
  }

  withdraw = (): void => {
    console.log('Voce sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}