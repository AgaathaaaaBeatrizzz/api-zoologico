// Definindo a classe Animal que representa um ser vivo no zoológico
export class Animal {

    // Atributos privados que armazenam informações sobre o animal: nome, idade e gênero
    private nome: string;
    private idade: number;
    private genero: string;

    // Construtor da classe Animal, que recebe parâmetros para inicializar nome, idade e gênero do animal
    constructor(_nome: string, _idade: number, _genero: string) {
        // Inicializando as propriedades do animal com os valores passados como parâmetros
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    // Método para obter o nome do animal
    public getNome(): string {
        return this.nome;
    }

    // Método para definir o nome do animal
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Método para obter a idade do animal
    public getIdade(): number {
        return this.idade;
    }

    // Método para definir a idade do animal
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    // Método para obter o gênero do animal
    public getGenero(): string {
        return this.genero;
    }

    // Método para definir o gênero do animal
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}
