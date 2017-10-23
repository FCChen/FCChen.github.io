function resizeYoutubeFrame() {
    var youtubeFrame = $("#youtube-iframe");
    var w = youtubeFrame.parent().width();
    var h = w * 9 / 16;
    youtubeFrame.css({width: w+'px'});
    youtubeFrame.css({height: h+'px'});
}

$(document).ready(function() {
    resizeYoutubeFrame();
    $(window).resize(function() {
        resizeYoutubeFrame();
    });
});

$(document).ready(function() {
    $(".youtube-btn").on('click', function() {
        var youtubeFrame = $("#youtube-iframe");
        var youtubeSrc = $(this).data("src");
        youtubeFrame.attr("src", youtubeSrc);
    });
});

$(document).ready(function() {
    var youtubeModal = $("#youtube-modal");

    youtubeModal.on('shown.bs.modal', function() {
        resizeYoutubeFrame();
    });

    youtubeModal.on('hidden.bs.modal', function() {
        $("#youtube-iframe").attr("src", "");
    });
});
