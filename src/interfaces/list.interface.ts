export interface UserList {
  [key: string]: User;
}

export interface User {
  apellido: string;
  celular: string;
  documento: string;
  emailCreacion: string;
  emailModificacion: string;
  estado: string;
  fechaCreacion: Date;
  fechaModificacion: Date;
  fecha_fin: Date;
  fecha_inicio: Date;
  nombre: string;
  usuarioCreacion: string;
  usuarioModificacion: string;
}
