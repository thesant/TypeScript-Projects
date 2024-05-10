import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
    constructor(name:string, accountNumer: number){
        super(name, accountNumer);
    }

    depositBonus = (valor:number):void =>{
        const valueBonus = valor +10;
        this.deposit(valueBonus);
        console.log(`<<<<<<<<EXTRATO>>>>>>>Valor deposito: R$${valor} bonus: RS10, total: $ ${valueBonus}`)
    }
}


