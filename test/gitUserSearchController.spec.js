describe('GitUserSearchController', function() {
    beforeEach(module('GitUserSearch'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('GitUserSearchController', {
            $scope: scope
        });
    }));

    it('should initialise with an empty search result and term', function() {
      expect(scope.searchResult).toBeUndefined();
      expect(scope.searchTerm).toBeUndefined();
    });
});
