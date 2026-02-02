export interface TipoDonacion {
    id: number;
    nombre_donacion: string;
    descripcion_donacion: string;
    created_at: string;
    updated_at: string;
}

export interface Donacion {
    id: number;
    nombre_donante: string;
    apellido_donante: string;
    donacion: number;
    mensaje: string;
    fecha_donacion: string;
    metodo: string;
    user_id: number;
    tipo_donacion_id: number;
    created_at: string;
    updated_at: string;
    tipo_donacion?: TipoDonacion;
}

export type DonacionResponse = Donacion[]
