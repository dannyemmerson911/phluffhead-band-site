(function() {
    angular
      .module("app")
      .config(function($routeProvider) {
        $routeProvider
          .when("/home", {
            template: "<home-component></home-component>"
          })
          .when("/images", {
            template: "<image-component></image-component>"
          })
          .when("/video", {
            template: "<video-component></video-component>"
          })
          .when("/booking", {
            template: "<booking-component></booking-component>"
          })
          .otherwise({
            redirectTo: "/home"
          });
      })
  })();