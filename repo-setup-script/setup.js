//All the child_processes will be executed in the directory from which the node script was run
(function() {
    const fs = require('fs');
    const execSync = require('child_process').execSync;
    const config = require('./config.json');

    let students = config.students;
    let sessionCount = config.sessionCount;

    if (!students || !students.length) {
        return;
    }
    //The Following loop will create a directory for each session.
    for (let i = 0; i < sessionCount; i++) {
        try {
            let stdOut = execSync(`mkdir session-${i+1} ; touch session-${i+1}/README.md`);
        } catch (error) {
            console.log(error.message);
        }
    }
    //The Following loop will create a directory for each student.
    // students.forEach(function(student, index, arr) {
    //     try {
    //         let stdOut = execSync(`mkdir ${student.name.split(' ').join('-').toLowerCase()}`);
    //         stdOut += execSync(`touch ${student.name.split(' ').join('-').toLowerCase()}/README.md`);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // });
    //The Following loop will create a branch for each student.
    // students.forEach(function(student, index, arr) {
    //     try {
    //         let stdOut = execSync(`git branch ${student.name.split(' ').join('-').toLowerCase()}`);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // });
})();