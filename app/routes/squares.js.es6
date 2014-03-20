export default Ember.Route.extend({
  model: function() {
    return [
      {name: "first square", width: 10}, 
      {name: "second square", width: 5},
      {name: "third square", width: 1}
    ];
  }
});
