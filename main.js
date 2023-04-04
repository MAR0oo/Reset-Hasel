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
        "Bezposredni", "Organizator", "Strategia", "Odpowiedzialny", "Dyrektor"];
    const numbers =  "0123456789";
    const characters = "!@#$%*+"
    for (let i = 0; i < 10; i++) {
        password = word[(Math.floor(Math.random() * word.length))];
        for (let i = 0; i < 3; i++) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        password += characters.charAt(Math.floor(Math.random() * characters.length));

        passwords += password + "<br>"; // dodajemy znacznik <br> po każdym haśle
    }
    document.getElementById("password").innerHTML = "" + passwords;
}
