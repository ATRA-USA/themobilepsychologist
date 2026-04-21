function SmoothScroll(target) {
    var extraOffset = 50; // adjust as needed

    $("html, body").animate(
        {
            scrollTop: $(target).offset().top - extraOffsetffset
        },
        1000
    );
}

// CLICK HANDLER
$("a[href^=\\#]").on("click", function (event) {
    event.preventDefault();
    SmoothScroll(this.hash);
});

// PAGE LOAD HANDLER (prevents auto-jump)
$(document).ready(function () {
    if (location.hash) {
        // Prevent browser from jumping instantly
        window.scrollTo(0, 0);

        // Delay so the page fully renders before animating
        setTimeout(() => {
            SmoothScroll(location.hash - 1000);
        }, 50);
    }
});
