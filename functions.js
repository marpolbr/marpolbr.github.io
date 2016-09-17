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
            "<td><a href='widokszczeg.html'><Button type='button' class='btn btn-info btn-sm'>Szczegoly</Button></a></td>" +
            "</tr>";
    };
//    "<td><a href='widokszczeg.html'><Button id='buttonSzczeg"+[i]+"'>Szczegoly</Button></a></td>" +
$('#testSzczegoly').click(function(){
    location.href='widokszczeg.html'
})
    
    //wyswietlenie danych w tabeli
    $("#tabelaOsob").html(
        "<tr>" +
        "<th>Imie</th>" +
        "<th>Nazwisko</th>" +
        "<th>Email</th>" +
        "<th>Telefon</th>" +
        "<th>Opcje</th>" +
        "</tr>" +
        daneOsobowe
        );

});

//<a href="widokszczeg.html"><button id="przyciskSzczegoly" type="button" class="btn btn-info">Widok szczegolowy</button></a>