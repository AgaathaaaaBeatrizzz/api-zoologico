import  express  from "express";
import cors from 'cors';
import { Ave } from "./model/Ave";
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";
import { Habitat } from "./model/Habitat";
import { exitCode } from "process";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";
const server = express();
const port = 3000;


server.use(express.json());
server.use(cors());

server.get('/', (req,res) =>{
    let passaro: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea')
    let habitat: Habitat = new Habitat ("Iceberg", mamifero);
    res.json([passaro, reptil, mamifero, Habitat]);
})

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json({ mensagem: "A nova ave do zoológico é:", ave});
});

server.listen(port, () => {
    console.log(`Servidor esta escutando no endereço http://localhost:${port}`);
})

server.post('/Habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(Habitat);
    res.status(200).json('Habitat criado');
});

server.post('/Atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(Atracao);
    res.status(200).json('Atracao criada');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado');
});