import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/v1/admins";

class AdminService{

    getAdmins(){

        return axios.get(ADMIN_API_BASE_URL);
    }

    createAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL, admin);
    }
    loginAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL+'/login', admin);
    }

}
export default new AdminService()