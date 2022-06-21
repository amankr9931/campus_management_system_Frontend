import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";
const TIMETABLE_API_BASE_URL = "http://localhost:8080/api/v1/timetable";
class StudentService{

    getStudents(){

        return axios.get(STUDENT_API_BASE_URL);
    }
    getTimeTables(){

        return axios.get(TIMETABLE_API_BASE_URL);
    }
    getFeedback(){

        return axios.get(STUDENT_API_BASE_URL+'/feedback');
    }

    createFeedback(feedback){
        return axios.post(STUDENT_API_BASE_URL+'/feedback', feedback);
    }

    getNotices(){

        return axios.get(STUDENT_API_BASE_URL+'/notice');
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }
    loginStudent(student){
        return axios.post(STUDENT_API_BASE_URL+'/login', student);
    }
    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(STUDENT_API_BASE_URL+ '/' + studentId, student);
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL+ '/' + studentId);
    }



}
export default new StudentService()