$(document).ready(function(){
    
    var daneOsobowe = "";
    //pobranie danych z bazy
    for (i=0;i<bazaOsob.osoba.length;i++){
        daneOsobowe += 
            "<tr>" +
            "<td>" + bazaOsob.osoba[i].imie + "</td>" +
            "<td>" + bazaOsob.osoba[i].nazwisko + "</td>" +
            "<td>" + bazaOsob.osoba[i].email + "</td>" +
            "<td>" + bazaOsob.osoba[i].telefon + "</td>" +            
            "<td><a href='widokszczeg.html?numer="+[i]+"'><Button id='btnSzczegoly"+[i]+"' type='button' class='btn btn-info btn-sm'>Szczegóły</Button></a></td>" +
            "</tr>";
    };

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

    //pobranie wartosci parametru numer z URL
//    var parametrURL = location.search.split('numer=')[1];
//    
//    
//    $("#testSzczeg").html(
//        "<p>" + bazaOsob.osoba[parametrURL].imie + "</p>"
//    );
//
//    $("#tabelaSzczegoly").html(
//        
//        "<tr><th>Dane</th></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].imie + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].nazwisko + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].nazwiskoRodowe + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].nrDomu + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].ulica + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].kod + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].miasto + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].dataUrodzenia + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].miejsceUrodzenia + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].PESEL + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].NIP + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].imieOjca + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].imieMatki + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].plec + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].nazwiskoMatki + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].rodzajDokumentuTozsamosci + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].wydanyPrzez + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].nrDokumentu + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].email + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].telefon + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].wyksztalcenie + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].obywatelstwo + "</td></tr>" +
//            "<tr><td>" + bazaOsob.osoba[parametrURL].narodowosc + "</td></tr>"
//    );

});

