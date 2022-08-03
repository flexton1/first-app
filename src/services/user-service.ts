import { IUser } from "../models/User";

export class UserService {
    private static users: IUser[] = [
        {
            sno: 'AAABBSS',
            name: 'Harun',
            age: 22,
            designation: 'Software engineer',
            company: 'Zentury'
        },
        {
            sno: 'AAABBSN',
            name: 'Harun2',
            age: 22,
            designation: 'Software engineer',
            company: 'Zentury'
        },
        {
            sno: 'AAABBSV',
            name: 'Harun3',
            age: 22,
            designation: 'Software engineer',
            company: 'Zentury'
        },
    ];

    public static getAllUsers(){
        return this.users;
    }


}
