module HeroApp {
    'use strict';
    export interface IMainController {
        heroes: IHero[];
        search: IHero;

    }

    export class MainController extends BaseClass implements IBaseClass, IMainController {
        public heroes: IHero[];
        public search: IHero;

        static $inject: string[] = ["heroService"];
        constructor(private heroService: IHeroService) {
            super();
            this.showLoading(true);
            this.heroService.getAllHero()
                .then((data) => {
                    this.heroes = data;
                }, () => {
                    this.showNotification("Error loading Hero ", "error", 3000);
                })
                .finally(() => {
                    this.showLoading(false);
                });
        }
    }

    angular.module("heroapp").controller("mainController", MainController);
}
