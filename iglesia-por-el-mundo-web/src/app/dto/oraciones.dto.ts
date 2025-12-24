export class Oracion {
    nombre_oracion: string;
    texto_oracion: string;
    autor: string;
    estado: boolean;
    tipo_oracion_id: number;

    constructor(
    nombre_oracion: string,
    texto_oracion: string,
    autor: string,
    estado: boolean,
    tipo_oracion_id: number){
        this.nombre_oracion=nombre_oracion;
        this.texto_oracion=texto_oracion;
        this.autor=autor;
        this.estado=estado;
        this.tipo_oracion_id=tipo_oracion_id
    }
}