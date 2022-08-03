import axios from 'axios';

export class UserService {
    private static serverUrl: string = 'https://jsonplaceholder.typicode.com';



    public static getAllUsers(){
        let dataUrl: string = `${this.serverUrl}/users`;

        return axios.get(dataUrl);

    }

    public static getUser(id: string){
        let dataUrl: string = `${this.serverUrl}/users/` + id;

        return axios.get(dataUrl);

    }


}