export interface TipoDonacion {
    id: number;
    nombre_donacion: string;
    descripcion_donacion: string;
    created_at: string;
    updated_at: string;
}

export type TipoDonacionResponse = TipoDonacion[]