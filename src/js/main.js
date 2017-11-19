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
    $(".repos-list-elem-user-menu-icon.hovered").click();
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



$(document).on("click", ".repos-list-elem-user-menu-icon", function () {
    var $popup = $(this).parent().find(".repos-list-elem-user-menu-popup");
    if ($popup.is(":hidden"))
    {
        $popup.fadeIn(200);
        $(this).addClass("hovered");
        $(".back").css("min-height", $("body").height() - $("header").height());
        $(".back").show();

    }
    else
    {
        $(this).removeClass("hovered");
        $popup.fadeOut(200);
        $(".back").hide();
        $(".back").css("min-height", "100%");
    }
})



$(document).on("change",".user-avatar-uploader input[type=file]", function (evt) {
    var file = evt.target.files; // FileList object
    var f = file[0];
    // Only process image files.
    if (!f.type.match('image.*')) {
        alert("Image only please....");
        return;
    }
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var elem = $("#user-avatar-loader");
           $(elem).attr("src", e.target.result);
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
})