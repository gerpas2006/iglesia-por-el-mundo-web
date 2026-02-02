export interface TipoOracion {
    id: number;
    nombre_oracion: string;
    descripcion_oracion: string;
    created_at: string;
    updated_at: string;
}

export interface Oracion {
    id: number;
    nombre_oracion: string;
    texto_oracion: string;
    autor: string;
    estado: boolean;
    tipo_oracion_id: number;
    created_at: string;
    updated_at: string;
    tipo_oracion?: TipoOracion;
}

export type OracionResponse = Oracion[]
