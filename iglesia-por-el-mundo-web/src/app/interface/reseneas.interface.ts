export interface User {
    id: number;
    name: string;
}

export interface Resena {
    id: number;
    titulo_reseneas: string;
    calificacion_resenea: number;
    comentario_resenea: string;
    fecha_resenea: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: User;
}

export type ResenaResponse = Resena[]