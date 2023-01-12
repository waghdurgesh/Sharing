import axios from 'axios';
const baseUrl = "http://localhost:6969/";
class Service_axios {
  
      
    
    displaylist() {
        return axios.get(baseUrl + "student");
    }
    insertlist(obj) {
        return axios.post(baseUrl + "student", obj);
    }
    deletelist(id) {
        return axios.delete(baseUrl + "student/" + id);
    }
}
export default new Service_axios();