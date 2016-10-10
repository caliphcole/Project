/**
 * Created by ColeCaliph on 9/13/2016.
 */
app.directive('projectApps',function(){

    return{

        restrict:'E',
        scope: {
            project: '='
        },
        templateUrl:'/fragment/worktemplate.html'

    };
});