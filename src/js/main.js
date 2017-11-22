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
    $(".js-popup").hide();
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


$(window).on("load",function () {


    $( "#user-find-autocomplete" ).autocomplete({
        source: "/reposit-catalog/ajax/users-list.php",
        minLength: 2,
        select: function( event, ui ) {
            $(".popup-user-find").attr("data-user", ui.item.id);
            $(".popup-user-find").find(".popup-user-find-ok").prop("disabled", false);
        },
        response: function( event, ui ) {
            console.log(ui);
        }
    });
});

$(document).on("keyup", "#user-find-autocomplete", function () {
    $(".popup-user-find").find(".popup-user-find-ok").prop("disabled", true);
})

$(document).on("click",".repos-list-elem-title-invite", function () {
    $(".popup-user-find").show().center();
    $(".popup-user-find").find(".popup-user-find-ok").prop("disabled", true);
    $(".popup-user-find").removeAttr("data-user");
    $(".popup-user-find").attr("data-rep",$(this).closest(".reps-list-elem").attr("data-id"));
    $(".back").css("min-height", $("body").height() - $("header").height());
    $(".back").show();
})


$(document).on("click", ".popup-user-find-ok", function () {
    var $popup = $(this).closest(".popup-user-find");
    var user = $popup.attr("data-user");
    var rep = $popup.attr("data-rep");
    if (!user)
        return false;
    $.ajax({
        url: "/reposit-catalog/ajax/add-invite.php",
        data: {rep_id: rep, user_id: user},
        type: "get",
        async: false,
        success: function (data) {
            $(".back").click();
        }
    });

    $.ajax({
        type: "get",
        async: false,
        success: function (data) {
            $(".reps-list").empty().append($(data).find(".reps-list"));
        }
    });

});

jQuery.fn.center = function () {

    return this;
}


$(document).on("click", ".repos-list-elem-title-delete", function () {
    var rep = $(this).closest(".reps-list-elem").attr("data-id");
    var currBlock = $(this).closest(".reps-list-elem");
    if (confirm("Удалить репозиторий? ")) {
        $.ajax({
            url: "/reposit-catalog/ajax/delete-reposit.php",
            data: {rep_id: rep},
            type: "get",
            async: false,
            success: function (data) {
                currBlock.remove();
            }
        });
    }
})

