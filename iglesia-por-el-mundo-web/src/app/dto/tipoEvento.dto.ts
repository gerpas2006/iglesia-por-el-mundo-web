export class TipoEventoDto {
    nombre_evento: string;
    descripcion_evento: string;

    constructor(nombre_evento: string,
        descripcion_evento: string) {
        this.nombre_evento = nombre_evento;
        this.descripcion_evento = descripcion_evento;
    }
}