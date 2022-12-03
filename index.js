let teachers = [
    {
        faculty: "engeneering",
        subjects: [
            {
                name: "math",
                teachers: [
                    "Shirali",
                    "Larisa"
                ]
            },
            {
                name: "java",
                teachers: [
                    "Timur",
                    "Nauryzbay"
                ]
            },
            {
                name: "ict",
                teachers: [
                    "Gulnaz",
                    "Otegen"
                ]
            }
        ]
    },
    {
        faculty: "law",
        subjects: [
            {
                name: "turkish",
                teachers: [
                    "Mehmet",
                    "Ridvan",
                    "Yilmaz"
                ]
            },
            {
                name: "pe",
                teachers: [
                    "Omirbek",
                    "Zhanbolat"
                ]
            }
        ]
    },
    {
        faculty: "edu",
        subjects: [
            {
                name: "python",
                teachers: [
                    "Alex"
                ]
            }
        ]
    },
    {
        faculty: "buiseness",
        subjects: [
            {
                name: "economy",
                teachers: [
                    "John",
                    "Micheal",
                    "Johanatan",
                    "Peter"
                ]
            },
            {
                name: "History",
                teachers: [
                    "Azat",
                    "Bolat"
                ]
            }
        ]
    }
];
let form = [0, 0, 0];

function forFaculty(el) {
    let sub = document.getElementById('subject');
    let teach = document.getElementById('teacher');
    clearSelect(sub, 'Subject');
    clearSelect(teach, 'Teacher');
    if (el.selectedIndex != 0) {
        sub.disabled = false;
        teach.disabled = true;
        let subs = teachers[el.selectedIndex - 1].subjects;
        form[0] = el.selectedIndex - 1;
        innerOption(subs, sub, true);
    }
    else {
        sub.disabled = true;
        teach.disabled = true;
    }
}
function forSubjects(el) {
    let teach = document.getElementById('teacher');
    clearSelect(teach, 'Teacher');
    if (el.selectedIndex != 0) {
        teach.disabled = false;
        let teachs = teachers[form[0]].subjects[el.selectedIndex - 1].teachers;
        form[1] = el.selectedIndex - 1;
        innerOption(teachs, teach);
    } else {
        teach.disabled = true;
    }
}

function innerOption(array, element, type) {
    if (type) {
        for (let i = 0; i < array.length; i++) {
            var opt = document.createElement('option');
            opt.value = array[i].name;
            opt.innerHTML = array[i].name;
            element.appendChild(opt);
        }
        return;
    }
    for (let i = 0; i < array.length; i++) {
        var opt = document.createElement('option');
        opt.value = array[i];
        opt.innerHTML = array[i];
        element.appendChild(opt);
    }
}

function clearSelect(element, content) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    var opt = document.createElement('option');
    opt.value = "";
    opt.innerHTML = content;
    element.appendChild(opt)
}