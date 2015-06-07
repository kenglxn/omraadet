export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  /**
   * set up the controller to populate search from q queryParameter
   * @param controller
   */
  setupController: function (controller) {
    // TODO move to controller
    var q = controller.get('q');
    if (q) {
      controller.set('search', q);
    }
  },

  /**
   * The model hook.
   *
   * fetch the model based on the queryparameter input 'params.q'
   *
   * TODO: support fetching data from several backends: https://github.com/tildeio/rsvp.js/blob/master/README.md#hash-of-promises
   */
  model: function (/*params*/) {
    return {
      name: "foo"
    };
  }
  //TODO
  //model: function() {
  //  return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls');
  //}
});
