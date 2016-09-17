$(document).ready(function(){
    
    var daneOsobowe = "";
    
    for (i=0;i<bazaOsob.osoba.length;i++){
        daneOsobowe += 
            "<tr>" +
            "<td>" + bazaOsob.osoba[i].imie + "</td>" +
            "<td>" + bazaOsob.osoba[i].nazwisko + "</td>" +
            "<td>" + bazaOsob.osoba[i].email + "</td>" +
            "<td>" + bazaOsob.osoba[i].telefon + "</td>" +
            "</tr>";  
    };  
    
    $("#tabelaOsob").html(
        "<tr>" +
        "<th>Imie</th>" +
        "<th>Nazwisko</th>" +
        "<th>Email</th>" +
        "<th>Telefon</th>" +
        "</tr>" +
        daneOsobowe
        );

});
