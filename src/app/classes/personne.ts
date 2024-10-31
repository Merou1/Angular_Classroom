// personne.ts
export class Personne {
    constructor(
      private _etablissement: string,
      private _fullName: string,
      private _registrationNum: number,
      private _rib: number,
      public image?: string 

    ) {}
  
    get etablissement(): string {
      return this._etablissement;
    }
  
    get fullName(): string {
      return this._fullName;
    }
  
    get registrationNum(): number {
      return this._registrationNum;
    }
  
    get rib(): number {
      return this._rib;
    }
  }
  