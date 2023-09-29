// initialsation du fichier
function init() {
    startHours();
    defineHour();

    setInterval(function () {
        defineHour();
    }, 1);
};

// Boucle sur les douze heures et appel 
// la fonction qui positionne les heures autour du cercle
function startHours() {
    const hours = document.querySelectorAll('.horloge-hour');

    for (let i = 0 ; i <= 11 ; i++) {
        let angle = ((Math.PI * 2) / 12) * i;
        positionHours(hours[i], angle);
    };
};

// Positionne les heures autour du cercle
function positionHours(element, angle) {
    element.style.left = 50 + (50 * Math.cos(angle)) + '%';
    element.style.top = 50 + (50 * Math.sin(angle)) + '%';
};

// Positionne les aiguilles en fonction de l'heure courante
function defineHour() {
    let moment = new Date();
    let hour = moment.getHours();
    let minut = moment.getMinutes();
    let second = moment.getSeconds();
    let milliSecond = moment.getMilliseconds();

    let hourBase = (360 / 12) * hour;
    let hourOnMinut = ((360 / 12) / 60) * minut;
    
    let minutBase = (360 / 60) * minut;
    let minuteOnSecond = ((360 / 60) / 60) * second;

    let secondBase = (360 / 60) * second;
    let millisecondOnSecond = ((360 / 60) / 1000) * milliSecond;

    let aiguilleHour = document.querySelector('.isHour');
    let aiguilleMinut = document.querySelector('.isMinut');
    let aiguilleSecond = document.querySelector('.isSecond');

    aiguilleHour.style.transform = `translate(-50%, -100%) rotate(${hourBase + hourOnMinut}deg)`;
    aiguilleMinut.style.transform = `translate(-50%, -100%) rotate(${minutBase + minuteOnSecond}deg)`;
    aiguilleSecond.style.transform = `translate(-50%, -100%) rotate(${secondBase + millisecondOnSecond}deg)`;
};