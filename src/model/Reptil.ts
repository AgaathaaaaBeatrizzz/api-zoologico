// Importando a classe Animal do arquivo "Animal"
import { Animal } from "./Animal";

// Definindo a classe Reptil, que estende a classe Animal
export class Reptil extends Animal {
    // Atributo privado para armazenar o tipo de escamas do réptil
    private tipo_de_escamas: string;

    // Construtor da classe Reptil, que recebe parâmetros para inicializar propriedades da classe pai (Animal) e o tipo de escamas do réptil
    constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
        // Chamando o construtor da classe pai (Animal) para inicializar suas propriedades
        super(_nome, _idade, _genero);
        
        // Inicializando a propriedade específica da classe Reptil
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    // Método para definir o tipo de escamas do réptil
    public setTipo_de_escamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }

    // Método para obter o tipo de escamas do réptil
    public getTipo_de_escamas(): string {
        return this.tipo_de_escamas;
    }
}
