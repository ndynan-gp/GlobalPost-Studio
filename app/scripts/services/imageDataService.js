'use strict';

app.factory('imageDataService', function() {
        var data = {};
        data.images = [{
            thumbnail: 'images/trash.jpg',
            gif: 'images/trash.gif',
            video:'100809340',
            videoDescription: '“Powerland,” our branded video series for Shell, won a Society of American Business Editors and Writers (SABEW) award for creativity as well as an IMA Outstanding Achievement award with a score of 475.'
        },{
            thumbnail: 'images/solar.jpg',
            gif: 'images/solar.gif',
            video:'100809338',
            videoDescription: 'A solar-powered plane completes its first intercontinental voyage. This video is part of our "Accelerate" branded video series supported by Bombardier.'


        },
        {
            thumbnail: 'images/jungle.jpg',
            gif: 'images/jungle.gif',
            video:'100809339',
            videoDescription: 'Enter energy entrepreneur Manuel Aguilar has found a way to capture sunlight with simple solar photovoltaic panels in Guatemala.'
        }];

        return data;
    });