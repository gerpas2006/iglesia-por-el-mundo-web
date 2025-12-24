export interface TipoOracion {
    id: number;
    nombre_oracion: string;
    descripcion_oracion: string;
}

export type TipoOracionResponse = TipoOracion[]