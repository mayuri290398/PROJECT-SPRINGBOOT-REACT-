import axios from 'axios';
const STUDENT_API_BASE_URL= "http://localhost:9048/api/students";

class StudentServices {

    getStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }
}
export default new StudentServices();