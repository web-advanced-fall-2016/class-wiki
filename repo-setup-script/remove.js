(function() {
    const fs = require('fs');
    const execSync = require('child_process').execSync;
    const config = require('./config.json');

    let students = config.students;
    let sessionCount = config.sessionCount;

    if (!students || !students.length) {
        return;
    }
    for (let i = 0; i < sessionCount; i++) {
        try {
            let stdOut = execSync(`rm -rf session-${i+1}`);
        } catch (error) {
            console.log(error.message);
        }
    }
    // students.forEach(function(student, index, arr) {
    //     try {
    //         let stdOut = execSync(`rm -rf ${student.name.split(' ').join('-').toLowerCase()}`);
    //         //stdOut += execSync(`touch ${student.name.split(' ').join('-').toLowerCase()}/README.md`);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // });
    students.forEach(function(student, index, arr) {
        try {
            let stdOut = execSync(`git branch -D ${student.name.split(' ').join('-').toLowerCase()}`);
        } catch (e) {
            console.log(e.message);
        }
    });
})();