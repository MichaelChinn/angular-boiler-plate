angular.module('boiler-plate', [])
    .config(function () {
        console.log('words');
    })
    .run(function () {

    })

    .controller('boilerPlateController', function () {
        var vm = this;
        vm.result = 'unchanged';
        vm.actionButton = actionButton;

        function actionButton() {
            vm.result = 'new value';
        }


    });