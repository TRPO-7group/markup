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
    if ($(this).closest(".detail-container").find(".detail-commits-all").is(":visible"))
    {
        $(this).find("span").html("[+]");
        $(this).closest(".detail-container").find(".detail-commits-all").hide(200);
    } else {
        $(this).find("span").html("[-]");
        $(this).closest(".detail-container").find(".detail-commits-all").show(200);
    }
})


$(document).on('click', ".reps-list-elem .repos-list-elem-title .repos-list-elem-title-name", function () {
        if ($(this).closest(".reps-list-elem").find(".repos-list-elem-user").is(":visible"))
        {
            $(this).closest(".reps-list-elem").find("hr").css("opacity",0);
            $(this).closest(".reps-list-elem").find(".repos-list-elem-user").hide(200);
            $(this).closest(".reps-list-elem").find(".repos-list-elem-invite-all").hide(200);
        }
        else
        {   $(this).closest(".reps-list-elem").find("hr").css("opacity",1);
            $(this).closest(".reps-list-elem").find(".repos-list-elem-user").show(200);
            $(this).closest(".reps-list-elem").find(".repos-list-elem-invite-all").show();
        }
})