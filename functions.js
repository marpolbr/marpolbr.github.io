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
    var parametrURL = location.search.split('numer=')[1];
    
    $("#testSzczeg").html(
        "<p>"+parametrURL+"</p>"
    );



});

