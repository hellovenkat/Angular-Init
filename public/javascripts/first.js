angular.module('app', ['ngMaterial', 'ngMessages'])
    .controller('first', ['$scope', '$http', function($scope, $http) {
        $scope.contact = {
            firstName: "",
            lastName: "",
            phone: ""
        }
        $scope.submit = function() {
            $http.post('/users/contact', $scope.contact, null).then(function(res) {
                alert(JSON.stringify(res));
            }, function(res) {
                alert(JSON.stringify(res));


            });

        }
    }]);