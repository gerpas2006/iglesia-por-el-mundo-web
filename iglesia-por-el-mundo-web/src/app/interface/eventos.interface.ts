export interface Evento {
    id:number,
    nombre_evento: string;
    fecha_evento: string;
    ubicacion: string;
    descripcion_evento: string;
    estado : boolean
    tipo_evento_id: number;
}

export type EventosResponse = Evento[];