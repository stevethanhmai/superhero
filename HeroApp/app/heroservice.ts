module HeroApp{
    'use strict';

    export interface IHeroService {
        getAllHero(): ng.IPromise<IHero[]>;
    }


    export class HeroService implements IHeroService{
        static $inject: string[] = ["$q", "$http"];

        constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
           
        }

        public getAllHero = (): ng.IPromise<IHero[]> => {
            var deferred = this.$q.defer();
            this.$http.get("app/superhero.json")
                .success((d:IHero[]) => { deferred.resolve(d) })
                .error((e) => { deferred.reject(e) });
            return deferred.promise;
        }

    }

    angular.module("heroapp").service("heroService", HeroService);

}