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
        "Motylek", "Monitor", "Niebieski", "Zielony", "Rozowy", "Bialy", "Pomaranczowy",
        "Fioletowy", "Zloty", "Blekitny", "Moro", "Motyl", "Klawiatura", "Deska",
        "Organ", "Kurier", "Paczka", "Podglad", "Centrala", "Helpdesk",
        "Czarny","Brazowy"];

    const numbers =  "123456789";
    const characters = "!@#$%"
    for (let i = 0; i < 10; i++) {
        password = word[(Math.floor(Math.random() * word.length))];
        for (let i = 0; i < 3; i++) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        password += characters.charAt(Math.floor(Math.random() * characters.length));

        passwords += `<div class="pass">${password} <button onclick="copyPassword(this)">Kopiuj</button></div>` ;
    }
    document.getElementById("password").innerHTML = "" + passwords;

}

function copyPassword(button) {
    const password = button.parentNode.firstChild.textContent;
    navigator.clipboard.writeText(password).then(() => {
        button.classList.add("copied");
    });
}
