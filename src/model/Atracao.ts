import { Habitat } from "./Habitat";

/**
 * Classe que representa uma atração no zoológico, contendo informações sobre seu nome e a lista de habitats associados.
 */
export class Atracao {
    /**
     * Nome da atração.
     */
    private nome: string;

    /**
     * Lista de habitats associados à atração.
     */
    private listaDeHabitats: Habitat;

    /**
     * Construtor da classe Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _listaDeHabitats A lista de habitats associados à atração.
     */
    constructor(_nome: string, _listaDeHabitats: Habitat) {
        this.nome = _nome;
        this.listaDeHabitats = _listaDeHabitats;
    }

    /**
     * Obtém o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * 
     * @param _nome O nome a ser atribuído à atração.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Obtém a lista de habitats associados à atração.
     * 
     * @returns A lista de habitats associados à atração.
     */
    public getListaDeHabitats(): Habitat {
        return this.listaDeHabitats;
    }

    /**
     * Define a lista de habitats associados à atração.
     * 
     * @param _listaDeHabitats A lista de habitats a ser atribuída à atração.
     */
    public setListaDeHabitats(_listaDeHabitats: Habitat): void {
        this.listaDeHabitats = _listaDeHabitats;
    }
}
