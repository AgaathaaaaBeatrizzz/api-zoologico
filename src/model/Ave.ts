class Ave {
    private envergatura: number;

    constructor(_envergatura: number,
                _nome: number,
                _idade: number,
                _genero: number,){
        this.envergatura= _envergatura;
     }
     public setEnvergatura(envergatura: number): void {
        this.envergatura = envergatura;
     }

     public getEnvergatura(): number {
        return this.envergatura;
     }
}