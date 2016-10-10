/**
 * Created by ColeCaliph on 9/13/2016.
 */
app.directive('slideShow',function(){

    return{

        restrict:'E',
        scope: {
            slide: '='
        },
        templateUrl:'views/singlepage/slideshow.html'

    };
});

