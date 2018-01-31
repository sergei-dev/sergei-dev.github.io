$(document).ready(function() {
    $(".nav-tabs .content").mCustomScrollbar({
        axis: 'x',
        keyboard:{scrollType:"stepped"},
        mouseWheel:{scrollAmount:188,normalizeDelta:true},
        autoExpandScrollbar:true,
        snapAmount:188,
        snapOffset:65
    });

     $(".financial-news-agency-content .content").mCustomScrollbar({
        axis: 'x',
        mouseWheel:{scrollAmount:188,normalizeDelta:false},
        snapAmount:400,
        snapOffset:20
    });

     $("#exchange-rates-table-info .content").mCustomScrollbar({
        axis: 'x',
        mouseWheel:{scrollAmount:188,normalizeDelta:false},
        snapAmount:400,
        snapOffset:20
    });
     $("#weather-sect .content").mCustomScrollbar({
        axis: 'x',
        mouseWheel:{scrollAmount:188,normalizeDelta:false},
        snapAmount:400,
        snapOffset:20
    });
     $("#weather-sect .content:last-child").mCustomScrollbar({
        axis: 'x',
        mouseWheel:{scrollAmount:188,normalizeDelta:false},
        snapAmount:400,
        snapOffset:20
    });
});