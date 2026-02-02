export interface TipoCita {
    id: number;
    nombre_cita: string;
    descripcion_cita: string;
    created_at: string;
    updated_at: string;
}

export interface Cita {
    id: number;
    nombre_solicitante: string;
    apellido_solicitante: string;
    fecha_y_hora_cita: string;
    mensaje: string;
    estado: string;
    contacto: string;
    tipo_cita_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    tipo_cita?: TipoCita;
}

export type CitaResponse = Cita[]