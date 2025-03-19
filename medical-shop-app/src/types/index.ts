export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
}

export interface Doctor {
    id: string;
    name: string;
    specialization: string;
    contact: string;
    availability: string;
}

export interface MedicalShop {
    id: string;
    name: string;
    address: string;
    contact: string;
}

export interface PathologyLab {
    id: string;
    name: string;
    address: string;
    contact: string;
}

export interface Appointment {
    id: string;
    userId: string;
    doctorId: string;
    date: string;
    time: string;
}