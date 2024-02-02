export class Animal {

    private nome: string;
    private idade: number;
    private genero: string;

    constructor(_nome: string,
                 _idade: number,
                  _genero: string) {
        this.nome = _nome;
        this.idade = _idade
        this.genero = _genero                
    }
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number) {
        this.idade = idade;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string) {
        this.genero = genero;
    }
}