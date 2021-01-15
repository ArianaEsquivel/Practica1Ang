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
    public setApellidos(apellidos: string) {
        this.apellidos = apellidos; 
    }
    public setEdad(edad: number) {
        this.edad = edad; 
    }
    public setSexo(sexo: string) {
        this.sexo = sexo; 
    }
}

