
function searchTrain() {
    var input = document.getElementById("stationName").value.toLowerCase();

    // Check the entered train name and redirect to the corresponding HTML page
    if (input === "cheran") {
        window.location.href = "cheran.html";
    } else if (input === "jammu tawi") {
        window.location.href = "jammu.html";
    } else if (input === "cholan") {
        window.location.href = "cholan.html";
    } else if (input === "pandian") {
        window.location.href = "pandian.html";
    } else if (input === "rapti sagar") {
        window.location.href = "rapti.html";
    } else {
        // Display message if the entered train name is invalid
        var searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = "<li class='invalid'>Invalid train name entered!</li>";
    }
}
