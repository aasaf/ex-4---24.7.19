const thirdModule = angular.module("mythirdmodule", [])

thirdModule.controller("HellothirdController", HellothirdCtrl);

function HellothirdCtrl() {
    this.message = "Hello I am hello third controller in third module"
}