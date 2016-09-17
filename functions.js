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
            "<td><a href='widokszczeg.html' id='linkWidokSzczegolowy'><Button id='btnSzczegoly"+[i]+"' type='button' class='testujese btn btn-info btn-sm'>Szczegoly</Button></a></td>" +
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
    
        
//
//        $("#btnSzczegoly"+[i]).click(function(){
//            var strLink = "widokszczeg.html?" + i;
//            $("#linkWidokSzczegolowy").attr("href",strLink);
//        });
    
//    $("#btnSzczegoly0").click(function() {
//    var contentPanelId = $(this).attr("id");
//    alert(contentPanelId);
//});
    
//        $("#btnSzczegoly0").click(function(event) {
//        // this.append wouldn't work
//        $(this).append(" Clicked");
//    });
    
        $("a").click(function(event) {
        alert(event.target.id);
    });
    
        

    
    //    var daneTest = "";
//    $("#testSzczeg").html("<p>" + bazaOsob.osoba[scrt_var].imie + " " + bazaOsob.osoba[scrt_var].nazwisko + "<p>");

//        var scrt_var = 0;
//    $("#btnSzczegoly0").click(function(){
//        var strLink = "widokszczeg.html?" + scrt_var;
//        $("#linkWidokSzczegolowy").attr("href",strLink);
//    });
    

    

});

