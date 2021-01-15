export class Persona {
    public nombre: string;
    public apellidos: string;
    public edad: number;
    public sexo: string;
    constructor(nombre: string, apellidos: string, edad: number, sexo: string ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre; 
    }
    public getNombre() {
        return this.nombre;
    }
    public setApellidos(apellidos: string) {
        this.apellidos = apellidos; 
    }
    public getApellidos() {
        return this.apellidos;
    }
    public setEdad(edad: number) {
        this.edad = edad; 
    }
    public getEdad() {
        return this.edad;
    }
    public setSexo(sexo: string) {
        this.sexo = sexo; 
    }
    public getSexo() {
        return this.sexo;
    }
}

