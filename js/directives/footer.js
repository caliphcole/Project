/**
 * Created by ColeCaliph on 10/4/2016.
 */
app.directive('footerInfo',function(){

    return{

        restrict:'E',
        scope: {
            menu: '='
        },
        templateUrl:'views/singlepage/footer.html'

    };
});