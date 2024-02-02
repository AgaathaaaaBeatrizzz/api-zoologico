import { Animal } from "./Animal";

export class Ave extends Animal{
    private envergatura: number;

    constructor(_nome: string,
                _idade: number,
                _genero: string,
                _envergatura: number,){
         super(_nome,_idade,_genero);
        this.envergatura= _envergatura;
     }

     public setEnvergatura(envergatura: number): void {
        this.envergatura = envergatura;
     }

     public getEnvergatura(): number {
        return this.envergatura;
     }
}