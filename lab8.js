var app=angular.module("myApp",[])
var app=angular.module("myApp",["ngRoute"])
app.config(function($routeProvider){
    $routeProvider

    .when("/",{
        templateUrl: "./first.html",
        controller: "FirstController"
    })

    .when("/second",{
        templateUrl: "./second.html",
        controller: "SecondController"
    })

    .when("/third",{
        templateUrl: "./third.html",
        controller: "ThirdController"
    })

    .otherwise({redirectTo: "/"})
});


app.controller("FirstController",function($scope, $http){
    $http.get("https://github.com/ZeltraX007/lab-8/blob/913822a794463712ad27c4a279ba5d4e884f9b0f/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
    // $scope.message="hello from first";
});

app.controller("SecondController",function($scope){
    $scope.message="This is a Admin Section";
});

app.controller("ThirdController",function($scope, $http){
    // $scope.message="hello from Third";
    $http.get("https://github.com/ZeltraX007/lab-8/blob/913822a794463712ad27c4a279ba5d4e884f9b0f/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
});