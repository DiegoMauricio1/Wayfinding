/* Funktion for at vise Nykøbing Falsters vejr */

const todayTemp = document.querySelector('#todayTemp');
const todayWeatherIcon = document.querySelector('#todayWeatherIcon');

findWeather();

function findWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=54.76906&longitude=11.87425&hourly=temperature_2m,weather_code&forecast_days=1')
        .then(req => req.json())
        .then(res => {
            const date = new Date();
            const nowIndex = date.getHours();
            todayTemp.innerHTML = res.hourly.temperature_2m[nowIndex];
            todayWeatherIcon.src = 'images/' + getWeatherIcon(res.hourly.weather_code[nowIndex]);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

/* Funktion til at vise dropdown for de forskellige sprog */
function toggleDropdown() {
    const dropdown = document.getElementById("languageOptions");
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

/* Tilbage funktion */
function goBack() {
    window.history.back();
}

/* Funktion til at oversætte til det valgte sprog */
function changeLanguage(lang) {
    const languageBtn = document.getElementById('languageBtn');
    document.documentElement.lang = lang;

    switch (lang) {
        case 'dk':
            languageBtn.innerText = 'Dansk';
            document.getElementById('title').innerText = 'Du har scannet QR-koden!';
            document.getElementById('description').innerHTML = 'Tage det første skridt mod spændende gåture.<br>\n' +
                '\t\tI vores app kan du lære mere om hvert sted undervejs.<br>\n' +
                '\t\tGod fornøjelse med din opdagelsesrejse!';
            document.getElementById('bookBtn').innerText = 'Kom i gang!'
            break;
        case 'en':
            languageBtn.innerText = 'English';
            document.getElementById('title').innerText = 'You have scanned the QR code!';
            document.getElementById('description').innerHTML = 'Take the first step towards exciting walks.<br>\n' +
                '\t\tIn our app, you can learn more about each place along the way.<br>\n' +
                '\t\tEnjoy your journey of discovery!'
            document.getElementById('bookBtn').innerText = 'Get started!'
            break;
        case 'es':
            languageBtn.innerText = 'Español';
            document.getElementById('title').innerText = '¡Has escaneado el código QR!';
            document.getElementById('description').innerHTML = 'Da el primer paso hacia paseos emocionantes.<br>\n' +
                '\t\tEn nuestra aplicación, puedes aprender más sobre cada lugar en el camino.<br>\n' +
                '\t\t¡Disfruta tu viaje de descubrimiento!'
            document.getElementById('bookBtn').innerText = 'A comenzar!'
            break;
        case 'de':
            languageBtn.innerText = 'Deutsch';
            document.getElementById('title').innerText = 'Sie haben den QR-Code gescannt!';
            document.getElementById('description').innerHTML = 'Machen Sie den ersten Schritt zu aufregenden Spaziergängen.<br>\n' +
                '\t\tIn unserer App erfahren Sie mehr über jeden Ort auf dem Weg.<br>\n' +
                '\t\tGenießen Sie Ihre Entdeckungsreise!'
            document.getElementById('bookBtn').innerText = 'Loslegen!'
            break;
        case 'sv':
            languageBtn.innerText = 'Svenska';
            document.getElementById('title').innerText = 'Du har skannat QR-koden!';
            document.getElementById('description').innerHTML = 'Ta det första steget mot spännande promenader.<br>\n' +
                '\t\tI vår app kan du lära dig mer om varje plats längs vägen.<br>\n' +
                '\t\tNjut av din upptäcktsresa!'
            document.getElementById('bookBtn').innerText = 'Komma igång!'
            break;
    }
    toggleDropdown();
}

/* alert efter bedømmelse */

document.getElementById('knap').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tak for din bedømmelse!');
});

