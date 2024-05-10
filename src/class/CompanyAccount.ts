import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  
  private status: boolean = true
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    
  }

  getLoan = (valor): void => {
    if(this.validateStatus){
      if(valor < 0){
        throw new Error('O valor precisa ser maior que zero')
      }
      this.balance = this.balance + valor
      console.log('Voce pegou um empréstimo')
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}