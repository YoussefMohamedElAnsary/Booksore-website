import { UserDTO } from "./UserDTO";

export interface Order{
    id: number;
    order_date: Date;
    order_status: string;
    user: UserDTO;
}