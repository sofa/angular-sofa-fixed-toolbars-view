
angular.module('sofa.fixedToolbarsView', [
    'sofa.scrollingShadow',
    'sofa-fixed-toolbars-view.tpl.html'
]);

//this is a generic directive that creates an view with optional fixed
//header and toolbars
angular.module('sofa.fixedToolbarsView')
    .directive('sofaFixedToolbarsView', function() {

        'use strict';

        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                header: '=',
                footer: '='
            },
            templateUrl: 'sofa-fixed-toolbars-view.tpl.html'
        };
    });
