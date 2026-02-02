export interface TipoEvento {
    id: number;
    nombre_evento: string;
    descripcion_evento: string;
    created_at: string;
    updated_at: string;
}

export interface Evento {
    id: number;
    nombre_evento: string;
    fecha_evento: string;
    ubicacion: string;
    descripcion_evento: string;
    estado: number;
    user_id: number;
    tipo_evento_id: number;
    created_at: string;
    updated_at: string;
    tipo_evento?: TipoEvento;
}

export type EventosResponse = Evento[];
