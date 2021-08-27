$(document).ready(function () {
    $("#info").click(function () {

        $.ajax({
            success: function (data) {
                window.location.replace("/group");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("body").text(jqXHR.statusText);
            }
        });

    });

});
