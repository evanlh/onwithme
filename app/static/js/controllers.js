'use strict';

var onwithmeApp = angular.module('onwithmeApp', []);
onwithmeApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

onwithmeApp.controller('HomeCtrl', function($scope){
    $scope.starting_soon = [
        { id: 1,
          name: 'Test',
          start: '1/1/2014'
        },
        { id: 2,
          name: 'Another Test',
          start: '1/15/2014'
        }
    ];
    $scope.popular = [
        { id: 1,
          name: 'Test',
          start: '1/1/2014'
        },
        { id: 2,
          name: 'Another Test',
          start: '1/15/2014'
        }
    ];
});

function onYouTubePlayerReady(playerId) {
    var ytp = document.getElementById(playerId);
    ytp.playVideo();
}

onwithmeApp.controller('ViewCtrl', function($scope){
    var params = { allowScriptAccess: "always" };
    var atts = { id: "ytplayer" };
    var video_id = "T2vw6CyCTjU";
    swfobject.embedSWF("http://www.youtube.com/v/" + video_id + "?enablejsapi=1&playerapiid=ytplayer&version=3",
                       "ytapiplayer", "680", "460", "8", null, null, params, atts);

});