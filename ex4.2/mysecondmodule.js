const secondModule = angular.module("mysecondmodule", [])

secondModule.controller("HellosecondController", HelloCtrl);

function HelloCtrl() {
    this.message = "Hello I am hello controller in second module"
}