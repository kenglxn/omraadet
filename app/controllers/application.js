export default Ember.Controller.extend({
  queryParams: ['q'],
  placeholder: 'f.eks: Oslo',
  search: null,
  searching: false,

  actions: {
    query: function () {
      var controller = this,
          query = controller.get('search');
      console.log("query: %s", query);
      if (query) {
        // TODO use googleapis to get match
        controller.transitionToRoute({queryParams: {q: query}});
      }
    },
    geoQuery: function () {
      var controller = this;
      console.log("geoquery");
      navigator.geolocation.getCurrentPosition(function (pos) {
        controller.set('searching', true);
        Ember.$.getJSON(
          'https://maps.googleapis.com/maps/api/geocode/json',
          {
            latlng: '' + pos.coords.latitude + ',' + pos.coords.longitude
          },
          function (data) {
            var town = data.results.filter(function (r) {
              return r.types[0] === 'postal_town';
            });
            controller.set('searching', false);
            controller.transitionToRoute({queryParams: {q: town[0].formatted_address}});
          }
        );
      });
    }
  }
});
