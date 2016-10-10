/**
 * Created by ColeCaliph on 9/13/2016.
 */
app.directive('socialMedia',function(){

    return{

        restrict:'E',
        scope: {
            social: '='
        },
        templateUrl:'views/singlepage/socialmedia.html'

    };
});