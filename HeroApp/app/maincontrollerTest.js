var HeroApp;
(function (HeroApp) {
    var Tests;
    (function (Tests) {
        "use strict";
        describe("maincontrollerTests", function () {
            var _heroService;
            var _$q;
            var fakeHeroes = [
                { "id": 1230, "name": "Sean", "imageUrl": "images/Sean.png" },
                { "id": 1231, "name": "Yaw", "imageUrl": "images/Yaw.png" },
                { "id": 1232, "name": "Lucy", "imageUrl": "images/Lucy.png" }
            ];
            //Arrange
            beforeEach(inject(function ($q, $httpBackend, heroService) {
                _$q = $q;
                _heroService = heroService;
            }));
            describe("Constructor Test", function () {
                //Arrange
                var deferred = _$q.defer();
                spyOn(_heroService, "getAllHero").and.returnValue(deferred.promise);
                //Act
                var ctrl = new HeroApp.MainController(_heroService);
                //Assert
                expect(_heroService.getAllHero()).toHaveBeenCalled();
                expect(ctrl).not.toBeNull();
            });
            describe("Constructor Resolved", function () {
                //Arrange
                var deferred = _$q.defer();
                spyOn(_heroService, "getAllHero").and.callFake(function () {
                    var deferred = _$q.defer();
                    deferred.resolve(fakeHeroes);
                    return deferred.promise;
                });
                //Act
                var ctrl = new HeroApp.MainController(_heroService);
                //Assert
                expect(ctrl.heroes).toBe(fakeHeroes);
            });
            describe("Constructor Reject", function () {
                //Arrange
                var deferred = _$q.defer();
                spyOn(_heroService, "getAllHero").and.callFake(function () {
                    var deferred = _$q.defer();
                    deferred.reject("Call error");
                    return deferred.promise;
                });
                //Act
                var ctrl = new HeroApp.MainController(_heroService);
                //Assert
                expect(ctrl.heroes).not.toBeDefined();
            });
        });
    })(Tests = HeroApp.Tests || (HeroApp.Tests = {}));
})(HeroApp || (HeroApp = {}));
//# sourceMappingURL=maincontrollerTest.js.map