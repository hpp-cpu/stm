import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students';

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createEmployee(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }

    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +studentId, student);
    }

    deleteEmployee(employeeId){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }
}

export default new StudentService();