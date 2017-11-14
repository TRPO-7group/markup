$(document).on("click", ".js-popup-search", function () {
    if ($("#filter-popup").is(":visible")) {
        $("#filter-popup").hide();
        $(".back").hide();
    }
    else {
        $("#filter-popup").fadeIn(150);
        $(".back").show();
    }
})

$(document).on("click", ".back", function () {
    $("#filter-popup").hide();
    $(this).hide();
})


$(document).on("click", ".list-group > span", function () {
    if ($(this).parent().find(".list-elem").is(":visible"))
        $(this).parent().find(".list-elem").hide(200);
    else
        $(this).parent().find(".list-elem").show(200);
})


$(document).on("click", ".detail-statistic", function () {
    if ($(".detail-commits-all").is(":visible"))
    {
        $(this).find("span").html("[+]");
        $(this).closest(".detail-container").find(".detail-commits-all").hide(200);
    } else {
        $(this).find("span").html("[-]");
        $(this).closest(".detail-container").find(".detail-commits-all").show(200);
    }
})