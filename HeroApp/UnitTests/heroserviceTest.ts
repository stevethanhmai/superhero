module HeroApp.Tests {
    'use strict';

    describe("heroservice Tests", () => {
        var $q: ng.IQService;
        var $http: ng.IHttpService;
        var $httpBackend: ng.IHttpBackendService;

        //Arrange
        beforeEach(inject(($q: ng.IQService, $http: ng.IHttpService, $httpBackend: ng.IHttpBackendService) => {
            $q = $q;
            $http = $http;
            $httpBackend = $httpBackend;

            $httpBackend.when("GET", "app/superhero.json").respond([
                { "id": 1230, "name": "Sean", "imageUrl": "images/Sean.png" },
                { "id": 1231, "name": "Yaw", "imageUrl": "images/Yaw.png" },
                { "id": 1232, "name": "Lucy", "imageUrl": "images/Lucy.png" }
            ]);
        }));

        describe("Constructor Test", () => {
            //Arrange

            //Act
            var srv = new HeroService($q, $http);

            //Assert
            expect(srv).not.toBeNull();
            expect(typeof srv.getAllHero).toBe("function");
        });

        describe("getAllHero Test", () => {
            //Arrange
            var srv: IHeroService = new HeroService($q, $http);
            //Act
            var result = srv.getAllHero();
            //Assert



        });

    });

}



