export class TipoEvento {
    id: number;
    nombre_evento: string;
    descripcion_evento: string;

    constructor(id: number, nombre_evento: string,
        descripcion_evento: string) {
        this.id=id;
        this.nombre_evento = nombre_evento;
        this.descripcion_evento = descripcion_evento;
    }
}