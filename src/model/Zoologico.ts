import { Atracao } from "./Atracao";

/**
 * Classe que representa um zoológico, contendo informações sobre seu nome e a lista de atrações disponíveis.
 */
export class Zoologico {
    /**
     * Nome do zoológico.
     */
    private nome: string;

    /**
     * Lista de atrações disponíveis no zoológico.
     */
    private listaDeAtracoes: Atracao;

    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _listaDeAtracoes A lista de atrações disponíveis no zoológico.
     */
    constructor(_nome: string, _listaDeAtracoes: Atracao) {
        this.nome = _nome;
        this.listaDeAtracoes = _listaDeAtracoes;
    }

    /**
     * Obtém o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param _nome O nome a ser atribuído ao zoológico.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Obtém a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getListaDeAtracoes(): Atracao {
        return this.listaDeAtracoes;
    }

    /**
     * Define a lista de atrações do zoológico.
     * 
     * @param _listaDeAtracoes A lista de atrações a ser atribuída ao zoológico.
     */
    public setListaDeAtracoes(_listaDeAtracoes: Atracao): void {
        this.listaDeAtracoes = _listaDeAtracoes;
    }
}
