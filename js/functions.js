$(function () {
    var operation = "C"; //"C"=Clear
    var selected_index = -1; //indeks wybranego elementu na liscie
    var tblPersons = localStorage.getItem("tblPersons"); //zwrocenie przechowywanych danych
    tblPersons = JSON.parse(tblPersons); //konwersja Stringu do Obiektu
    if (tblPersons === null) //jesli brak danych zainicjowac pusta tablice
        tblPersons = [];
    
    function Create() {
        //uzyskanie wartosci z formularza HTML i przeksztalcenie je na String
        var person = JSON.stringify({
            ID: $("#txtID").val(),
            Name: $("#txtNazwa").val(),
            Phone: $("#txtPhone").val(),
            Email: $("#txtEmail").val()
        });
        //dodanie obiektu do tabeli
        tblPersons.push(person);
        //przechowywanie danych w Local Storage
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
        alert("Dane zostały zapisane"); //Alert o zapisaniu danych
        return true;
    }
    
    function Edit() {
        //Edycja wybranej pozycji z tabeli
        tblPersons[selected_index] = JSON.stringify({
            ID: $("#txtID").val(),
            Name: $("#txtNazwa").val(),
            Phone: $("#txtPhone").val(),
            Email: $("#txtEmail").val()
        });
        //przechowywanie danych w Local Storage
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
        alert("Dane zostały edytowane"); //Alert o edytowaniu danych
        return true;
    }
    
    function Delete() {
        //Usuniecie wybranej pozycji z tabeli
        tblPersons.splice(selected_index, 1);
        //Aktualizacja danych w Local Storage
        localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
        alert("Osoba usunieta"); //Alert o usunieciu osoby
    }
    
    function List() {
        $("#tblList").html("");
        $("tblList").html(
            "<thead>" +
             "<tr>" +                
             "<th>ID</th>" +
             "<th>Nazwa</th>" +
             "<th>Telefon</th>" +
             "<th>E-mail</th>" +
            "<th>Dzialania</th>" +
             "</tr>" +
             "</thead>" +
             "<tbody>" +
             "</tbody>"
        ); //Dodanie tabeli struktury HTML
        for (var i in tblPersons) {
            var per = JSON.parse(tblPersons[i]);
            $("tblList tbody").append("<tr>" +
                                      "<td>" + per.ID + "</td>" +
                                      "<td>" + per.Name + "</td>" +
                                      "<td>" + per.Phone + "</td>" +
                                      "<td>" + per.Email + "</td>" + 
                                      "<td><img src='img/Custom-Icon-Design-Flatastic-1-Edit.ico' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='img/Awicons-Vista-Artistic-Delete.ico' alt='Delete" + i + "' class='btnDelete'/></td>" +
                                      "</tr"
                                     );
        } //przegladanie i dodawanie elementow do tabeli HTML
    }
    
    $("#frmPerson").bind("submit",function() {                  
        if (operation === "C")
            return Create();
        else
          return Edit();
    }); //funkcja decyduje, czy element jest dodawany czy edytowany
    
    List();
    
    $(".btnEdit").bind("click",function() {
        operation = "E"; //"E" = Edycja
        //uzyskanie identyfikatora elementu, ktory ma byc edytowany
        selected_index = parseInt($(this).attr("alt").replace("Edit",""));
        //konwersja do formatu JSON nadajaca sie do edycji danych
        var per = JSON.parse(tblPersons[selected_index]);
        $("#txtID").val(per.ID);
        $("txtName").val(per.Name);
        $("txtPhone").val(per.Phone);
        $("txtEmail").val(per.Email);
        $("txtID").attr("readonly","readonly");
        $("#txtName").focus();
    });
    
    $(".btnDelete").bind("click", function() {
        //dostanie identyfikatora elementu ktory ma byc usuniety
        selected_index = parseInt($(this).attr("alt").replace("Delete",""));
        Delete(); //usun element
        List(); //powrot do listy pozycji tabeli
    }); 
});