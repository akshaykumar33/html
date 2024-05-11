import { birthDates, days, years } from './data.js';

function BirthDayCalendar() {
    let parent = document.getElementById('birthday');
    let daysDiv = document.createElement('div');
    daysDiv.classList.add('daysDiv');
    days.forEach((day, id) => {
        let dayDiv = document.createElement('div');
        dayDiv.classList.add('dayDiv');
        let head = document.createElement('div');
        head.classList.add('headDay');
        head.textContent = day;
        head.id = `headDay${id + 1}`;
        dayDiv.appendChild(head);
        let body = document.createElement('div');
        body.classList.add('bodyDay');
        body.textContent = "";
        body.id=`bodyDay${id + 1}`;
        dayDiv.appendChild(body);
        dayDiv.classList.add('days');
        daysDiv.appendChild(dayDiv);
    });
    parent.appendChild(daysDiv);

    let label = document.createElement('label');
    label.setAttribute('for', 'year');
    label.textContent = 'YEAR';
    parent.appendChild(label);

    let selectYear = document.createElement('select');
    selectYear.name = 'year';
    selectYear.id = 'year';
    let selectOption = document.createElement('option');
    selectOption.value = "select year";
    selectOption.textContent = "Select Year";
    selectYear.appendChild(selectOption);
    console.log(years);
    years.forEach(year => {
        let selectOption = document.createElement('option');
        selectOption.value = year;
        selectOption.textContent = year;
        selectYear.appendChild(selectOption);
    });
    parent.appendChild(selectYear);

    selectYear.addEventListener('change', function () {
        let mon = [], tue = [], wed = [], thurs = [], fri = [], sat = [], sun = [];
        birthDates.forEach(dates => {
            const [day, month, year] = dates.birthday.split('/');
            let currentDay = new Date(`${day}/${month}/${selectYear.value}`).getDay();
            let currentName = dates.name.split(' ');
            currentName=currentName[0][0]+currentName[1][0];

            switch (currentDay) {
                case 0:
                    sun.push(currentName);
                    break;
                case 1:
                    mon.push(currentName);
                    break;
                case 2:
                    tue.push(currentName);
                    break;
                case 3:
                    wed.push(currentName);
                    break;
                case 4:
                    thurs.push(currentName);
                    break;
                case 5:
                    fri.push(currentName);
                    break;
                case 6:
                    sat.push(currentName);
                    break;
                default:
                    break;
            }
        });

        function getRandomColor() {
            return Math.floor(Math.random() * colors.length);
        }

        function getDays(anyDay) {
            let outerDay = document.createElement('div');
            outerDay.classList.add('outerDay')
            anyDay.forEach(day => {
                let currentDay = document.createElement('div');
                currentDay.textContent = day;
                currentDay.style.background = colors[getRandomColor()];
                currentDay.style.color = 'white';
                currentDay.classList.add('namesDate');
                outerDay.appendChild(currentDay);
            });
            return outerDay;
        }

        let colors = ['#545D79', '#8AB721', '#C77D99', '#78CAE3', '#E64A33'];
        days.forEach((day, id) => {
            let daySegregation = document.getElementById(`headDay${id + 1}`).textContent;
            let dayContainer = document.getElementById(`bodyDay${id + 1}`);
            dayContainer.innerHTML = '';
            switch (daySegregation) {
                case 'MON':
                    dayContainer.appendChild(getDays(mon));
                    break;
                case 'TUE':
                    dayContainer.appendChild(getDays(tue));
                    break;
                case 'WED':
                    dayContainer.appendChild(getDays(wed));
                    break;
                case 'THURS':
                    dayContainer.appendChild(getDays(thurs));
                    break;
                case 'FRI':
                    dayContainer.appendChild(getDays(fri));
                    break;
                case 'SAT':
                    dayContainer.appendChild(getDays(sat));
                    break;
                case 'SUN':
                    dayContainer.appendChild(getDays(sun));
                    break;
                default:
                    break;
            }
        });
    });
}

BirthDayCalendar();
