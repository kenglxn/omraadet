export default Ember.Controller.extend({
  search: null,
  gmapsMeta: null,
  searching: false,
  queryParams: ['q'],
  placeholder: 'f.eks: Oslo',
  isGeoEnabled: window.navigator.geolocation,

  _queryGmapsApi: function (queryObj) {
    var controller = this;
    Ember.$.getJSON(
      'https://maps.googleapis.com/maps/api/geocode/json',
      queryObj,
      function (data) {
        controller.set('searching', false);
        controller.set('search', data.results[0].formatted_address);
        controller.set('gmapsMeta', data.results[0]); // TODO build object from results { city:x, kommune:x, region:x }
        controller.transitionToRoute({queryParams: {q: data.results[0].formatted_address}});
      }
    );
  },
  actions: {
    query: function () {
      var controller = this,
        query = controller.get('search');
      if (query) {
        controller.set('searching', true);
        // TODO: perhaps implement multiselect based on gmaps results for address
        controller._queryGmapsApi({address: query});
      }
    },
    geoQuery: function () {
      var controller = this;
      if (!controller.get('isGeoEnabled')) {
        return;
      }

      controller.set('search', "");
      controller.set('searching', true);
      navigator.geolocation.getCurrentPosition(function (pos) {
        controller._queryGmapsApi({latlng: '' + pos.coords.latitude + ',' + pos.coords.longitude});
      });
    }
  }
});
