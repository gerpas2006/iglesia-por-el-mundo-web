export interface TipoEvento {
    id: number;
    nombre_evento: string;
    descripcion_evento: string;
    created_at: string;
    updated_at: string;
}

export type TipoEventoResponse = TipoEvento[]