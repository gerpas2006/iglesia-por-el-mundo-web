export class CitaDto{
    nombre_solicitante : string;
    apellido_solicitante: string;
    fecha_y_hora_cita :string;
    mensaje:string;
    estado:string;
    contacto:string;
    tipo_cita_id:number;

    constructor(
        nombre_solicitante: string,
        apellido_solicitante: string,
        fecha_y_hora_cita: string,
        mensaje: string,
        estado: string,
        contacto: string,
        tipo_cita_id: number
    ){  
        this.nombre_solicitante = nombre_solicitante;
        this.apellido_solicitante = apellido_solicitante;
        this.fecha_y_hora_cita = fecha_y_hora_cita;
        this.mensaje = mensaje;
        this.estado = estado;
        this.contacto = contacto;
        this.tipo_cita_id = tipo_cita_id;
    }
}
