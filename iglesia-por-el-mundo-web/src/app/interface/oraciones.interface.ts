export interface Oracion {
    id: number;
    nombre_oracion: string;
    texto_oracion: string;
    autor: string;
    estado: boolean;
    tipo_oracion_id: number;
}

export type OracionResponse = []
