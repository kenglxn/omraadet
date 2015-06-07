export default Ember.Controller.extend({
  queryParams: ['q'],
  placeholder: 'f.eks: Oslo',
  search: null,

  actions: {
    query: function () {
      var controller = this,
          query = controller.get('search');
      console.log("query: %s", query);
      if (query) {
        this.transitionToRoute({queryParams: {q: query}});
      }
    },
    geoQuery: function () {
      var controller = this;
      navigator.geolocation.getCurrentPosition(function (pos) {
        Ember.$.getJSON(
          'https://maps.googleapis.com/maps/api/geocode/json',
          {
            latlng: '' + pos.coords.latitude + ',' + pos.coords.longitude
          },
          function (data) {
            var town = data.results.filter(function (r) {
              return r.types[0] === 'postal_town';
            });
            controller.set('search', town[0].formatted_address);
          }
        );
      });
    }
  }
});
