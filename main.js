function generatePassword() {

    let password = "";
    let passwords = "";
    const word = ["Bankomat", "Konsultant", "Komunikat", "Restauracja", "Samochod",
        "Ksiazka", "Oprogramowanie", "Konferencja", "Przedsiebiorstwo", "Marketing",
        "Ekspert", "Rekomendacja", "Infrastruktura", "Konsultacja", "Konstrukcja",
        "Inwestycja", "Mechanizm", "Przedstawiciel", "Bezpieczenstwo", "Prezentacja",
        "Reklama", "Programista", "Kwalifikacja", "Stacjonarny", "Samodzielny",
        "Kierownik", "Szkolenie", "Interesant", "Wyposazenie", "Kontrakt",
        "Kreatywny", "Konsument", "Posiadacz", "Oprogramowanie", "Pracodawca",
        "Serwisant", "Organizacja", "Inwestor", "Projektant", "Wsparcie",
        "Specjalista", "Nadzorca", "Realizacja", "Innowacyjny", "Przywodca",
        "Bezposredni", "Organizator", "Strategia", "Odpowiedzialny", "Dyrektor",
        "Motylek", "Monitor", "Niebieski", "Zielony", "Rozowy", "Pomaranczowy",
        "Fioletowy", "Blekitny", "Motyl", "Klawiatura",
        "Kurier", "Paczka", "Podglad", "Centrala", "Helpdesk",
        "Brazowy","Akwizytor",
        "Bezpieczenstwo","Certyfikat","Dostawczyni","Elektrownia","Fotelarz","Gospodarstwo","Hurtownia","Informatyka","Jubilerstwo","Kontroler","Lokalizacja","Mieszkanie","Naukowiec","Organizacja","Poczta","Przemyslowy","Redaktor","Spoldzielnia","Turystyka","Uniwersytet","Videokonferencja","Weteran","Kserokopiarka","Zabezpieczenie","Administracja","Biotechnologia","Chlodnica","Dyskwalifikacja","Egzekucja","Farmaceuta","Geograficzny","Hotelarstwo","Inwestycja","Jezykoznawca","Konsultacja","Laboratorium","Motywacja","Niezawodnosc","Optymalizacja","Pracownik","Reklamacja","Sekretariat","Tlumaczenie","Ubezpieczenie","Wspolpraca","Zaladowanie","Akredytacja","Biblioteka"];
    
    const numbers =  "123456789";
    const characters = "!@#$%";
    for (let i = 0; i < 10; i++) {
        password = word[(Math.floor(Math.random() * word.length))];
        while(password.length < 8){
            password += word[(Math.floor(Math.random() * word.length))];
        }
        for (let i = 0; i < 3; i++) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        password += characters.charAt(Math.floor(Math.random() * characters.length));

        passwords += `<div class="pass">${password}<button onclick="copyPassword(this)">Kopiuj</button> 
          <button id="sebamamalego" onclick="copyHTML(this)">Kopiuj HTML</button>
           <button id="janekmamalego" onclick="sendEmail(this)">Wyślij e-mail</button></div> `;    
    }

    document.getElementById("password").innerHTML = "" + passwords;

}
function sendEmail(button) {
    const password = button.parentNode.firstChild.textContent;
    var email = prompt("Podaj adres e-mail odbiorcy:");
    button.classList.add("copied");
    const mailTemplate = "Witaj%2C%0D%0A%0D%0ATwoje%20has%C5%82o%20zosta%C5%82o%20pomy%C5%9Blnie%20zmienione.%20Poni%C5%BCej%20znajduje%20si%C4%99%20Twoje%20nowe%20has%C5%82o%3A%0D%0A%0D%0A"+password+"%40%0D%0A%0D%0AProsimy%20o%20zalogowanie%20si%C4%99%20na%20swoje%20konto%20i%20natychmiastowe%20zmienienie%20has%C5%82a%20na%20w%C5%82asne%2C%20unikalne%20has%C5%82o.%0D%0A%0D%0AHas%C5%82o%20mo%C5%BCna%20zmieni%C4%87%20na%20stronie%20hasla.dpd.com.pl%0D%0A%0D%0AProsimy%20nie%20odpowiada%C4%87%20na%20ten%20email.%20Wiadomo%C5%9B%C4%87%20wygenerowana%20automatycznie."; 
    if (email !== null) {
        var subject = encodeURIComponent("Zmiana hasła");
        var body = encodeURIComponent('Witaj,\n\nTwoje hasło zostało pomyślnie zmienione. Oto Twoje nowe hasło:\n\n' + password + '\n\nZachęcamy do zalogowania się na swoje konto i natychmiastowej zmiany hasła na własne, unikalne. Można to zrobić na stronie hasla.dpd.com.pl\n\nProsimy nie odpowiadać na ten e-mail, jest to wiadomość wygenerowana automatycznie.');

        var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
        window.location.href = mailtoLink;
    }
}

function copyPassword(button) {
    const password = button.parentNode.firstChild.textContent;
    navigator.clipboard.writeText(password).then(() => {
        button.classList.add("copied");
    });
}
function copyHTML(button) {
    const password = button.parentNode.firstChild.textContent;
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zmiana hasła</title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        body { font-family: 'Roboto', Arial, sans-serif; font-size: 16px; margin: 0; background-color: #f2f2f2; }
        table { border-collapse: collapse; }
        .container { max-width: 800px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .header { background-color: #4caf50; padding: 20px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px; }
        .header h1 { color: #ffffff; font-weight: 700; margin: 0; }
        .content { padding: 20px; }
        .footer { background-color: #f2f2f2; padding: 20px; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; }
        .important { font-weight: 700; }
        </style>
    </head>
    <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
                <td align="center">
                    <table class="container" cellpadding="0" cellspacing="0" role="presentation" style="width: 600px;">
                        <tr>
                            <td class="header" align="center">
                                <h1>Zmiana hasła</h1>
                            </td>
                        </tr>
                        <tr>
                            <td class="content">
                                <p>Witaj,</p>
                                <p>Twoje hasło zostało pomyślnie zmienione. Poniżej znajduje się Twoje nowe hasło:</p>
                                <p class="important">${password}</p>
                                <p>Prosimy o zalogowanie się na swoje konto i natychmiastowe zmienienie hasła na własne, unikalne hasło.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="footer">
                                <p>Prosimy nie odpowiadać na ten email. Wiadomość wygenerowana automatycznie.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;

    navigator.clipboard.writeText(htmlTemplate).then(() => {
        button.classList.add("copied");
    });
}
