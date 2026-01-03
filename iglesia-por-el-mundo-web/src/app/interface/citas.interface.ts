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
}

export type CitaResponse = Cita[]