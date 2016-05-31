

module HeroApp.Tests {
    "use strict";

     describe("maincontrollerTests", () => {
        var heroservice: IHeroService;
        var q: ng.IQService;
        var fakeHeroes = [
            { "id": 1230, "name": "Sean", "imageUrl": "images/Sean.png" },
            { "id": 1231, "name": "Yaw", "imageUrl": "images/Yaw.png" },
            { "id": 1232, "name": "Lucy", "imageUrl": "images/Lucy.png" }
        ];

        //Arrange
        beforeEach(inject(($q: ng.IQService, $httpBackend: ng.IHttpBackendService, heroService: IHeroService) => {
            q = $q;
            heroservice = heroService;
        }));

        describe("Constructor Test", () => {
            //Arrange
            var deferred = q.defer();
            spyOn(heroservice, "getAllHero").and.returnValue(deferred.promise);

            //Act
            var ctrl = new MainController(heroservice);

            //Assert
            expect(heroservice.getAllHero()).toHaveBeenCalled();
            expect(ctrl).not.toBeNull();

        });

        describe("Constructor Resolved", () => {
            //Arrange
            spyOn(heroservice, "getAllHero").and.callFake(() => {
                var deferred = q.defer();
                deferred.resolve(fakeHeroes);
                return deferred.promise;
            });

            //Act
            var ctrl = new MainController(heroservice);

            //Assert
            expect(ctrl.heroes).toBe(fakeHeroes);


        });

        describe("Constructor Reject", () => {
            //Arrange
            spyOn(heroservice, "getAllHero").and.callFake(() => {
                var deferred = q.defer();
                deferred.reject("Call error");
                return deferred.promise;
            });

            //Act
            var ctrl = new MainController(heroservice);

            //Assert
            expect(ctrl.heroes).not.toBeDefined();

        });

    });
}