var $ = require('jquery')(require("jsdom").jsdom().parentWindow),
    fs = require('fs'),
    move = 'https://callofthedeep.net/api/?target=move&direction=l&entityid=dc2dd98a-83fe-44c4-97d5-800ab8d9afa7&sessionId=4e4eb6bb-1080-4296-a8d2-7442b3303245',
    scan = 'https://callofthedeep.net/api/?target=scan&entityid=dc2dd98a-83fe-44c4-97d5-800ab8d9afa7&sessionId=4e4eb6bb-1080-4296-a8d2-7442b3303245';

function run(url) {
    ajaxHelper(url, 'POST');
}

function ajaxHelper(uri, method, data) {
    return $.ajax({
        type: method,
        url: uri,
        dataType: 'jsonp',
        contentType: 'application/json',
        data: data ? JSON.stringify(data) : null
    }).done(function (data) {
        
    }).error(function (err) {

    });
}

function createUrl(target, direction, entityid, sessionId) {
    if (direction) {
        var url = "https://callofthedeep.net/api/?" + 
                "target=" + 
                target + 
                "&direction=" + 
                direction + 
                "&entityid=" +
                entityid +
                "&sessionId=" +
                sessionId;
    }

    return url;
}

//run(createUrl('move', 'r', 'dc2dd98a-83fe-44c4-97d5-800ab8d9afa7', '4b4125a2-a3c9-4cc9-9853-b84abd997b4a'));
//run(createUrl('move', 'r', '4b4125a2-a3c9-4cc9-9853-b84abd997b4a'));
run(move);
//run(scan);