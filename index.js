// Array stores each student
let studentGrades = [
    ["Jane", [90, 93, 95], "pass"],
    ["Nico", [95, 94, 97], "pass"],
    ["Bianca", [97, 96, 97], "pass"]
];

//para ma-add si Faye sa array
studentGrades.push(["Faye", [96, 97, 98], "pass"]);


studentGrades.forEach((student) => {
    let grades = student[1]; // Kunin yung array ng grades
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length; // Calculate average
    student.push(average); // Add yung average sa array ni student
    console.log(`${student[0]} average: ${average}`); // I-print yung pangalan at average

    // Update yung status base sa average
    if (average >= 85) {
        student[2] = "honor pass";
    } else if (average >= 70 && average < 85) {
        student[2] = "pass";
    } else {
        student[2] = "fail";
    }
});

// ma-update yung status at averages
let updatedStudentGrades = studentGrades.map((student) => {
    let grades = student[1]; // Kunin ulit yung grades array
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length; // Compute ulit ng average

    // Update status based on bagong grading scale
    let status;
    if (average >= 85) {
        status = "honor pass";
    } else if (average >= 70 && average < 85) {
        status = "pass";
    } else {
        status = "fail";
    }

    return [student[0], grades, status, average];
});

//Class Average
let classAverage = updatedStudentGrades.reduce((sum, student) => sum + student[3], 0) / updatedStudentGrades.length;
console.log(`Class average: ${classAverage}`); // I-print yung class average
