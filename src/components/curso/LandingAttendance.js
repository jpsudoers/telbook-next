import React, {useContext} from 'react';
import StudentsContext from "@/context/students/Students.context";
import {useRouter} from "next/router";
import {getStudentsByGrade, getStudentsByStatusActive} from "@/utils/student";
import Current from "@/components/curso/asistencia/Current";
import UserContext from "@/context/user/User.context";

const LandingAttendance = () => {
    const {
        students,
    } = useContext(StudentsContext);

    const {
        user,
    } = useContext(UserContext);

    const router = useRouter();
    const {grade} = router.query;
// JPS se saca el filtro que no muestra asistencia
    const studentsByGrade = getStudentsByGrade(students, grade)
    const studentsByStatus = getStudentsByStatusActive(studentsByGrade)
    return (
        <Current students={studentsByStatus} user={user} grade={grade}/>
    );
};

export default LandingAttendance;
