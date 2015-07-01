/*jslint browser: true */
/*global jQuery*/

jQuery.fn.increaseClickTarget = function (link, exclude, deferred) {
    'use strict';

    return this.on('click', deferred || null, function (e) {
        var href = jQuery(this).find(link).attr('href');
        if (!jQuery(e.target).is(exclude || '') && href !== undefined) {
            document.location = href;
        }
    });

};

jQuery(function ($) {
    'use strict';

    // Discussions - Modern
    $('ul.DataList.Discussions')
        .increaseClickTarget('.Title a', 'span.OptionsTitle, a, a.Bookmark, input', 'li.Item');
    $('ul.DataList.Discussions li.Item').css('cursor', 'pointer');

    // Discussions - Table
    $('table.DiscussionsTable')
        .increaseClickTarget('a.Title', 'span.OptionsTitle, a, a.Bookmark, input', 'tr.Item');
    $('table.DiscussionsTable tr.Item').css('cursor', 'pointer');

    // Conversations
    $('ul.DataList.Conversations')
        .increaseClickTarget('h3.Users>a', 'span.OptionsTitle, a, a.Bookmark', 'li.Item');
    $('ul.DataList.Conversations li.Item').css('cursor', 'pointer');

    // Categories - Modern
    $('ul.DataList.CategoryList')
        .increaseClickTarget('a.Title', 'span.OptionsTitle, a, input', 'li.Item');
    $('ul.DataList.CategoryList li.Item').css('cursor', 'pointer');

    // Categories - Table
    $('table.CategoryTable tbody td.CategoryName')
        .increaseClickTarget('h2 a', 'span.OptionsTitle, a')
        .css('cursor', 'pointer');
    $('table.CategoryTable tbody td.LatestPost')
        .increaseClickTarget('a.BlockTitle')
        .css('cursor', 'pointer');

    // MeMenu
    $('#Panel')
        .increaseClickTarget('a:last', null, 'div.MeMenu li.Item')
    $('div.MeMenu').on('hover', 'li.Item', function () {
            $(this).css('cursor', 'pointer');
    });

});
