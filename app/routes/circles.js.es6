export default Ember.Route.extend({
  model: function() {
    return [
      {name: "first circle", diameter: 10}, 
      {name: "second circle", diameter: 5},
      {name: "third circle", diameter: 1}
    ];
  }
});
