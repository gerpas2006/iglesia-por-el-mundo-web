export class EventoDto {
    nombre_evento: string;
    fecha_evento: string;
    ubicacion: string;
    descripcion_evento: string;
    estado: number
    tipo_evento_id: number;

    constructor(nombre_evento: string,
        fecha_evento: string,
        ubicacion: string,
        descripcion_evento: string,
        estado: number,
        tipo_evento_id: number) {
        this.nombre_evento = nombre_evento;
        this.fecha_evento = fecha_evento;
        this.ubicacion = ubicacion;
        this.descripcion_evento = descripcion_evento;
        this.estado = estado;
        this.tipo_evento_id = tipo_evento_id;
    }
}