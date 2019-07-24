
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {
   
    $scope.name = ''
    $scope.email = ''
    $scope.age = ''
    $scope.verification = ''


    $scope.getClass = function() {
        if ($scope.name == '' ||$scope.email == '' || $scope.age == '')
            return 'missing'
        
        return 'ok'

    }

    $scope.varification_class = function() {
        if ($scope.name == '' && $scope.email != '' && $scope.age=='' )
            return 'almost_missing'

        if ($scope.email != '' && $scope.email != '' && $scope.age==''  )
            return 'almost_missing'

        if ($scope.email != '' && $scope.email == '' && $scope.age!='' )
            return 'almost_missing'
        if ($scope.email != '' && $scope.email == '' && $scope.age=='' )
            return 'almost_missing'

        if ($scope.name != '' && $scope.email == '' && $scope.age=='' )
            return 'almost_missing'
        if ($scope.name == '' && $scope.email == '' && $scope.age!=''  )
            return 'almost_missing'
         if ($scope.name == '' && $scope.email == '' && $scope.age=='' )
            return 'missing'
        if ($scope.name != '' && $scope.email != '' && $scope.age!=''&& $scope.age<18 )
        return 'child'
        return 'ok'
    }

    }
