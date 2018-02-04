import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('new');
  });
  this.route('authors', function() {
    this.route('new',{path: '/new'});
    this.route('show', { path: '/:author_id' });
  });
  this.route('publishing-houses');
  this.route('properties', { 
       path: '/properties'
      },function() {
         this.route("list", {
           path: '/list'
         }, function() {
           this.route("default", {
             path: "/"
           });
           this.route("filter", {
             path: "/:filter"
           });
           // this.route("hidden", {
           //   path: "/hidden"
           // });
           //this.route('filter');
         });
         this.route('new',
             {path: '/new'});
         this.route('editar', {
          path: '/:idProperty/edit'
         },function() {
           this.route('default',{
            path: '/'
           });
           this.route('tab',{
            path:'/:tabName'
           });
         });
  });

  this.route('agency', function() {
    this.route('default',{
      path: "/"
    });
    this.route('tab',{
      path: "/:tabName"
    });
  });

  this.route('wesite', {
    path: "website"
  }, function() {
    this.route('default',{
      path: "/"
    });
  });
});

export default Router;
