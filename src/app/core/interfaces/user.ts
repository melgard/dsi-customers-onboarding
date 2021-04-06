import { Company } from "./company";

export interface User {
    idUsuario?: string;
    nombreCompleto: string;
    organizacion: Company;
    isAdmin: boolean;
}
