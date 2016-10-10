/**
 * Created by ColeCaliph on 9/11/2016.
 */

app.directive('menuInfo',function(){

    return{

        restrict:'E',
        scope: {
            menu: '='
        },
        templateUrl:'views/singlepage/menuInfo.html'

    };
});