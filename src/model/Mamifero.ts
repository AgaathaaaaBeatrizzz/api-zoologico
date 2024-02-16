// Importando a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Definindo a classe Mamifero, que estende a classe Animal
export class Mamifero extends Animal {
    // Atributo privado para armazenar a raça do mamífero
    private raca: string;

    // Construtor da classe Mamifero, que recebe parâmetros para inicializar propriedades da classe pai (Animal) e a raça do mamífero
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        // Chamando o construtor da classe pai (Animal) para inicializar suas propriedades
        super(_nome, _idade, _genero);
        
        // Inicializando a propriedade específica da classe Mamifero
        this.raca = _raca;
    }

    // Método para definir a raça do mamífero
    public setRaca(raca: string): void {
        this.raca = raca;
    }

    // Método para obter a raça do mamífero
    public getRaca(): string {
        return this.raca;
    }
}
