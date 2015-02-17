'use strict';

describe('sofa.fixedToolbarsView', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.fixedToolbarsView'));

    beforeEach(inject(function (_$compile_, _$rootScope_, $templateCache) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache.put('header.tpl.html', 'hello');
        $templateCache.put('footer.tpl.html', 'world');
    }));

    it('should include the headear', function () {
        $rootScope.header = 'header.tpl.html';
        element = $compile('<sofa-fixed-toolbars-view header="header"></sofa-fixed-toolbars-view>')($rootScope);
        $rootScope.$digest();
    
        expect(element.find('div')[0].innerText).toEqual('hello');
    });

    it('should include the footer', function () {
        $rootScope.footer = 'footer.tpl.html';
        element = $compile('<sofa-fixed-toolbars-view footer="footer"></sofa-fixed-toolbars-view>')($rootScope);
        $rootScope.$digest();
    
        expect(element.find('div')[4].innerText).toEqual('world');
    });

    it('should transclude the content in the body', function () {
        element = $compile('<sofa-fixed-toolbars-view>hello</sofa-fixed-toolbars-view>')($rootScope);
        $rootScope.$digest();

        expect(element.find('div')[0].innerText.trim()).toEqual('hello');
    });
});
