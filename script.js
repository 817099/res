$(document).ready(function () {
    $("nav ul li a").on("click", function () {
        alert("Navigating to: " + $(this).text());
    });
});
