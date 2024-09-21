"use strict";
//Interface for student 
let classrooms = {};
let students = {};
function createClassroom(className, schedule) {
    if (!classrooms[className]) {
        classrooms[className] = { name: className, schedule, students: [], assignments: {} };
        console.log(`Classroom '${className}' created with schedule.`);
    }
    else {
        console.log(`Classroom '${className}' already exists.`);
    }
}
//add student
function add_student(studentId, studentName, className) {
    if (!classrooms[className]) {
        console.log(`Classroom '${className}' does not exist.`);
        return;
    }
    if (!students[studentId]) {
        students[studentId] = { id: studentId, name: studentName, classes: [] };
    }
    classrooms[className].students.push(studentId);
    students[studentId].classes.push(className);
}
function add_assignment(className, assignmentTitle, dueDate) {
    if (!classrooms[className]) {
        console.log(`Classroom '${className}' does not exist.`);
        return;
    }
    classrooms[className].assignments[assignmentTitle] = { name: assignmentTitle, dueDate, submissions: {} };
    classrooms[className].students.forEach(studentId => {
        classrooms[className].assignments[assignmentTitle].submissions[studentId] = 'Pending';
    });
}
function submit_assignment(studentId, className, assignmentTitle) {
    if (!classrooms[className]) {
        console.log(`Classroom '${className}' does not exist.`);
        return;
    }
    if (!classrooms[className].assignments[assignmentTitle]) {
        console.log(`Assignment '${assignmentTitle}' does not exist.`);
        return;
    }
    if (!students[studentId]) {
        console.log(`Student '${studentId}' does not exist.`);
        return;
    }
    classrooms[className].assignments[assignmentTitle].submissions[studentId] = 'Submitted';
    console.log(`Student '${studentId}' submitted assignment '${assignmentTitle}' for class '${className}'.`);
}
createClassroom("Math101", { startTime: "10:00 AM", endTime: "11:00 AM", date: "2024-09-22" });
add_student("1234", "Alice", "Math101");
add_assignment("Math101", "Homework1", "2024-09-25");
submit_assignment("1234", "Math101", "Homework1");
