import {Fn} from "@/utils/formats";

const validateForm = (data) => {
    let errors = {};

    if (!data.grade) {
        errors.grade = 'El curso es requerido';
    }
    if (!data.names) {
        errors.names = 'Los nombres son requeridos';
    }
    if (!data.lastnames) {
        errors.lastnames = 'Los apellidos son requeridos';
    }
    if (!Fn.validaRut(data.run)) {
        errors.run = 'El RUN no es válido';
    }
    if (!data.run) {
        errors.run = 'El RUN es requerido';
    }
    if (!data.birthday) {
        errors.birthday = 'La fecha de nacimiento es requerida';
    }
    if (!data.join) {
        errors.join = 'La fecha de incorporación es requerida';
    }
    if (!data.gender) {
        errors.gender = 'El género es requerido';
    }
    if (!data.address) {
        errors.address = 'La dirección es requerida';
    }
    if (!data.region) {
        errors.region = 'La región es requerida';
    }
    if (!data.nationality) {
        errors.nationality = 'La nacionalidad es requerida';
    }
    if (!data.town) {
        errors.town = 'La comuna es requerida';
    }
    if (!data.originalTown) {
        errors.originalTown = 'El pueblo originario es requerido';
    }
    if (!data.tutorName) {
        errors.tutorName = 'El nombre del tutor es requerido';
    }
    if (!data.parent) {
        errors.parent = 'El parentesco con el alumno es requerido';
    }
    if (!data.email) {
        errors.email = 'El correo electrónico del tutor es requerido';
    }
    if (!data.phone) {
        errors.phone = 'El teléfono del tutor es requerido';
    }
    if (!data.educationMother) {
        errors.educationMother = 'El nivel educacional de la madre es requerido';
    }
    if (!data.educationFather) {
        errors.educationFather = 'El nivel educacional del padre es requerido';
    }
    if (!data.turn) {
        errors.turn = 'La jornada es requerida';
    }
    if (!data.origin) {
        errors.origin = 'La procedencia es requerida';
    }
    if (!data.tel) {
        errors.tel = 'La situación TEL del alumno es requerida';
    }
    if (!data.learnIssue) {
        errors.learnIssue = 'Los problemas de aprendizaje del alumno son requeridos';
    }
    if (!data.live) {
        errors.live = 'Con quien vive el alumno es requerido';
    }
    if (!data.social) {
        errors.social = 'La situación social del alumno es requerida';
    }
    return errors;
}

export const initialValues = {
    grade: '',
    names: '',
    lastnames: '',
    run: '',
    birthday: '',
    join: '',
    gender: '',
    address: '',
    region: '',
    nationality: '',
    town: '',
    originalTown: '',
    tutorName: '',
    parent: '',
    email: '',
    phone: '',
    educationMother: '',
    educationFather: '',
    turn: '',
    origin: '',
    tel: '',
    learnIssue: '',
    live: '',
    social: '',
}

export const initialValuesEdit = (student) => {
    const yearB = Number(student.fechaNacimiento.substring(0, 4));
    const monthB = Number(student.fechaNacimiento.substring(4, 6));
    const dayB = Number(student.fechaNacimiento.substring(6, 8));
    const dateB = new Date(yearB, monthB - 1, dayB);

    const yearJ = Number(student.fechaIncorporacion.substring(0, 4));
    const monthJ = Number(student.fechaIncorporacion.substring(4, 6));
    const dayJ = Number(student.fechaIncorporacion.substring(6, 8));
    const dateJ = new Date(yearJ, monthJ - 1, dayJ);

    return {
        id: student.id,
        grade: student.curso,
        names: student.nombresAlumno,
        lastnames: student.apellidosAlumno,
        run: student.run,
        birthday: dateB,
        join: dateJ,
        gender: student.sexo,
        address: student.domicilio,
        region: student.region,
        nationality: student.nacionalidadAlumno,
        town: student.comuna,
        originalTown: student.alumnoPuebloOriginario,
        tutorName: student.nombreApoderado,
        parent: student.parentezcoConAlumno,
        email: student.email,
        phone: student.telefono,
        educationMother: student.nivelEducacionalMadre,
        educationFather: student.nivelEducacionalPadre,
        turn: student.jornada,
        origin: student.procedencia,
        tel: student.tipoTel,
        learnIssue: student.problemasDeAprendizaje,
        live: student.viveCon,
        social: student.situacionSocial,
        nL: student.numeroLista,
        nM: student.numeroMatricula,
    }
}

export default validateForm;