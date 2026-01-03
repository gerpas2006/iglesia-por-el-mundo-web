export interface TipoCita {
    id: number;
    nombre_cita: string;
    descripcion_cita: string;
    created_at: string;
    updated_at: string;
}

export type TipoCitaResponse = TipoCita[]