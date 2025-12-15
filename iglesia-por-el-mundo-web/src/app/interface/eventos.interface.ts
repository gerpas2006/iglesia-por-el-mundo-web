export interface Evento {
    id: number;
    nombre_evento: string;
    fecha_evento: string;
    ubicacion: string;
    descripcion_evento: string;
    estado : boolean
    user_id: number;
    tipo_evento_id: number;
    created_at: string;
    updated_at: string;
}

export type EventosResponse = Evento[];