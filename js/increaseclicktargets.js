$(function () {
    'use strict';

    // Discussions - Modern
    $('ul.DataList.Discussions').on('click', 'li.Item', function (e) {
        var href = $(this).find('.Title a').attr('href');
        if (!$(e.target).is('span.OptionsTitle, a, a.Bookmark, input') && typeof href !== 'undefined') {
            document.location = href;
        }
    });
    $('ul.DataList.Discussions li.Item').css('cursor', 'pointer');

    // Discussions - Table
    $('table.DiscussionsTable').on('click', 'tr.Item', function (e) {
        var href = $(this).find('a.Title').attr('href');
        if (!$(e.target).is('span.OptionsTitle, a, a.Bookmark, input') && typeof href !== 'undefined') {
            document.location = href;
        }
    });
    $('table.DiscussionsTable tr.Item').css('cursor', 'pointer');

    // Conversations
    $('ul.DataList.Conversations').on('click', 'li.Item', function (e) {
        var href = $(this).find('h3.Users>a').attr('href');
        if (!$(e.target).is('span.OptionsTitle, a, a.Bookmark') && typeof href !== 'undefined') {
            document.location = href;
        }
    });
    $('ul.DataList.Conversations li.Item').css('cursor', 'pointer');

    // Categories - Modern
    $('ul.DataList.CategoryList').on('click', 'li.Item', function (e) {
        var href = $(this).find('a.Title').attr('href');
        if (!$(e.target).is('span.OptionsTitle, a, input') && typeof href !== 'undefined') {
            document.location = href;
        }
    });
    $('ul.DataList.CategoryList li.Item').css('cursor', 'pointer');

    // Categories - Table
    $('table.CategoryTable tbody td.CategoryName')
        .click(function (e) {
            var href = $(this).find('h2 a').attr('href');
            if (!$(e.target).is('span.OptionsTitle, a') && typeof href !== 'undefined') {
                document.location = href;
            }
        })
        .css('cursor', 'pointer');
    $('table.CategoryTable tbody td.LatestPost')
        .click(function () {
            var href = $(this).find('a.BlockTitle').attr('href');
            if (typeof href !== 'undefined') {
                document.location = href;
            }
        })
        .css('cursor', 'pointer');


    // MeMenu
    $('div.MeMenu')
        .on('click', 'li.Item', function () {
            var href = $(this).find('a:last').attr('href');
            if (typeof href !== 'undefined') {
                document.location = href;
                return false;
            }
        })
        .on('hover', 'li.Item', function () {
            $(this).css('cursor', 'pointer');
        });

});
