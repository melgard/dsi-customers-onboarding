interface Empresas {
    [index: number]: {
        idEmpresa: number;
        identificador: string;
        razonsocial: string;
    }
}
export interface Company {
    idOrganizacion?: number;
    identificador: string;
    razonSocial: string;
    email: string;
    telefono: string;
    cuit: string;
    fechaCiclo: Date;
    pais: {
        id: number;
        valor: string;
    };
    rubro: {
        id: number;
        valor: string;
    };
    empresas: Empresas
}
