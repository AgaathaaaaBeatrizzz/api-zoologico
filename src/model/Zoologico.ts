import { Atracao } from "./Atracao";

export class Zoologico {
    private nome: string;
    private lista_de_atrações: Atracao

    constructor(_nome: string, _lista_de_atrações: Atracao){
        this.nome = _nome;
        this.lista_de_atrações = _lista_de_atrações;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setLista_de_atrações(lista_de_atrações: Atracao):void{
        this.lista_de_atrações = lista_de_atrações;
    }
    public getLista_de_atrações():Atracao{
        return this.lista_de_atrações
    }
}