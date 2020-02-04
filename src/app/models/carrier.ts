export interface Carrier {
    id?: string;
    name?: string;
    tripType?: string;
    arrivalTime?: Date;
    departurePlace?: string;
    arrivalPlace?: string;
    availableSize?: number;
    rating?: number;
}
