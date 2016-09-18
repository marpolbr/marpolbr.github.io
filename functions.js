function loadUserList(){

$(document).ready(function () {
    
    var daneOsobowe = "";
    //pobranie danych z bazy
    for (i = 0; i < bazaOsob.osoba.length; i++) {
        daneOsobowe +=
            "<tr>" +
            "<td>" + bazaOsob.osoba[i].imie + "</td>" +
            "<td>" + bazaOsob.osoba[i].nazwisko + "</td>" +
            "<td>" + bazaOsob.osoba[i].email + "</td>" +
            "<td>" + bazaOsob.osoba[i].telefon + "</td>" +
            "<td><a href='widokszczeg.html?numer=" + [i] + "'><Button id='btnSzczegoly" + [i] + "' type='button' class='btn btn-primary btn-sm'>Szczegóły</Button></a></td>" +
            "</tr>";
    } ;

    //wyswietlenie danych w tabeli
    $("#tabelaOsob").html(
        "<tr>" +
            "<th>Imię</th>" +
            "<th>Nazwisko</th>" +
            "<th>Email</th>" +
            "<th>Telefon</th>" +
            "<th>Opcje</th>" +
            "</tr>" +
            daneOsobowe 
    );
    

});
}

function loadSpecificUser(){
    $(document).ready(function () {

    var parametrURL = location.search.split('numer=')[1];
    
    var imie = bazaOsob.osoba[parametrURL].imie;
    var nazwisko = bazaOsob.osoba[parametrURL].nazwisko;
    var nazwiskoRodowe = bazaOsob.osoba[parametrURL].nazwiskoRodowe;
    var nrDomu = bazaOsob.osoba[parametrURL].nrDomu;
    var ulica = bazaOsob.osoba[parametrURL].ulica;
    var kod = bazaOsob.osoba[parametrURL].kod;
    var miasto = bazaOsob.osoba[parametrURL].miasto;
    var dataUrodzenia = bazaOsob.osoba[parametrURL].dataUrodzenia;
    var miejsceUrodzenia = bazaOsob.osoba[parametrURL].miejsceUrodzenia;
    var PESEL = bazaOsob.osoba[parametrURL].PESEL;
    var NIP = bazaOsob.osoba[parametrURL].NIP;
    var imieOjca = bazaOsob.osoba[parametrURL].imieOjca;
    var imieMatki = bazaOsob.osoba[parametrURL].imieMatki;
    var plec = bazaOsob.osoba[parametrURL].plec;
    var nazwiskoMatki = bazaOsob.osoba[parametrURL].nazwiskoMatki;
    var rodzajDokumentuTozsamosci = bazaOsob.osoba[parametrURL].rodzajDokumentuTozsamosci;
    var wydanyPrzez = bazaOsob.osoba[parametrURL].wydanyPrzez;
    var nrDokumentu = bazaOsob.osoba[parametrURL].nrDokumentu;
    var email = bazaOsob.osoba[parametrURL].email;
    var telefon = bazaOsob.osoba[parametrURL].telefon;
    var wyksztalcenie = bazaOsob.osoba[parametrURL].wyksztalcenie;
    var obywatelstwo = bazaOsob.osoba[parametrURL].obywatelstwo;
    var narodowosc = bazaOsob.osoba[parametrURL].narodowosc;
    
    
    $("#tabelaSzczegoly").html(
        
        "<tr><th>Dane</th></tr>" +
            "<tr><td>" + imie + "</td></tr>" +
            "<tr><td>" + nazwisko + "</td></tr>" +
            "<tr><td>" + nazwiskoRodowe + "</td></tr>" +
            "<tr><td>" + nrDomu + "</td></tr>" +
            "<tr><td>" + ulica + "</td></tr>" +
            "<tr><td>" + kod + "</td></tr>" +
            "<tr><td>" + miasto + "</td></tr>" +
            "<tr><td>" + dataUrodzenia + "</td></tr>" +
            "<tr><td>" + miejsceUrodzenia + "</td></tr>" +
            "<tr><td>" + PESEL + "</td></tr>" +
            "<tr><td>" + NIP + "</td></tr>" +
            "<tr><td>" + imieOjca + "</td></tr>" +
            "<tr><td>" + imieMatki + "</td></tr>" +
            "<tr><td>" + plec + "</td></tr>" +
            "<tr><td>" + nazwiskoMatki + "</td></tr>" +
            "<tr><td>" + rodzajDokumentuTozsamosci + "</td></tr>" +
            "<tr><td>" + wydanyPrzez + "</td></tr>" +
            "<tr><td>" + nrDokumentu + "</td></tr>" +
            "<tr><td>" + email + "</td></tr>" +
            "<tr><td>" + telefon + "</td></tr>" +
            "<tr><td>" + wyksztalcenie + "</td></tr>" +
            "<tr><td>" + obywatelstwo + "</td></tr>" +
            "<tr><td>" + narodowosc + "</td></tr>"
    );
});
}



