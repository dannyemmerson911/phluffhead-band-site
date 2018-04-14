(function(){
    var homeComponent = {

    template: `
    <p>Phluffhead is a band</p>
    `
    }
    angular
        .module("app")
        .component("homeComponent", homeComponent); 
})();