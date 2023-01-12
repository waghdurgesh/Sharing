import axios from 'axios';

class Service_axios {
    constructor() {
        this.baseUrl = "http://localhost:6969/"
    }
    displaylist() {
        return axios.get(this.baseUrl + "student");
    }
    insertlist(obj) {
        return axios.post(this.baseUrl + "student", obj);
    }
    deletelist(id) {
        return axios.delete(this.baseUrl + "student/" + id);
    }
}
export default new Service_axios();