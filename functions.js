function loadUserList() {

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
        };

    //wyswietlenie danych w tabeli
        $("#tabelaOsob").html(
            "<thead>" +
                "<tr>" +
                "<th>Imię</th>" +
                "<th>Nazwisko</th>" +
                "<th>Email</th>" +
                "<th>Telefon</th>" +
                "<th>Opcje</th>" +
                "</tr>" +
                "<thead>" +
                "<tbody>" +
                daneOsobowe +
                "</tbody>"
        );

    });
    


    
}

function loadSpecificUser() {
    $(document).ready(function () {

        var parametrURL = location.search.split('numer=')[1],
            wybranaOsoba = bazaOsob.osoba[parametrURL];
        
        $("#tabelaSzczegoly").html(
        
            "<tr><th>Dane</th></tr>" +
                "<tr><td>" + wybranaOsoba.imie + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.nazwisko + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.nazwiskoRodowe + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.nrDomu + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.ulica + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.kod + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.miasto + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.dataUrodzenia + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.miejsceUrodzenia + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.PESEL + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.NIP + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.imieOjca + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.imieMatki + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.plec + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.nazwiskoMatki + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.rodzajDokumentuTozsamosci + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.wydanyPrzez + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.nrDokumentu + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.email + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.telefon + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.wyksztalcenie + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.obywatelstwo + "</td></tr>" +
                "<tr><td>" + wybranaOsoba.narodowosc + "</td></tr>"
        );
    });
}

function paginacja(){
    jQuery(function($) {
                var items = $("#tabelaOsob tbody tr");

                var numItems = items.length;
                var perPage = 10;

                // only show the first 2 (or "first per_page") items initially
                items.slice(perPage).hide();

                // now setup pagination
                $("#pagination").pagination({
                    items: numItems,
                    itemsOnPage: perPage,
                    cssStyle: "light-theme",
                    onPageClick: function(pageNumber) { // this is where the magic happens
                        // someone changed page, lets hide/show trs appropriately
                        var showFrom = perPage * (pageNumber - 1);
                        var showTo = showFrom + perPage;

                        items.hide() // first hide everything, then show for the new page
                             .slice(showFrom, showTo).show();
                    }
                });

                // next we'll create a function to check the url fragment and change page if necessary
                // we're storing this function in a variable so we can reuse it
                var checkFragment = function() {
                    // if there's no hash, make sure we go to page 1
                    var hash = window.location.hash || "#page-1";

                    // we'll use regex to check the hash string as follows:
                    // ^            strictly from the beginning of the string (i.e. succeed "#page-3" but fail "hi!#page-3")
                    // #page-       exactly match the text "#page-"
                    // (            start a matching group (so we can access what's in these parentheses on their own)
                    //      \d      any digit ([0-9])
                    //      +       one or more of the previous literal (one or more digits)
                    // )            end the matching group
                    // $            we should now be at the end of the string - if not, then don't match (i.e. fail "#page-3hi!")
                    hash = hash.match(/^#page-(\d+)$/);

                if(hash)
                        // the selectPage function is one of many described in the documentation
                        // we've captured the page number in a regex group: (\d+)
                        $("#pagination").pagination("selectPage", parseInt(hash[1]));
                };

                // we'll call this function whenever the back or forward buttons are pressed
                // thanks to mike o'connor for highlighting the need for this
                $(window).bind("popstate", checkFragment);
                
                // and we'll also call it to check right now!
                checkFragment();
            });
}