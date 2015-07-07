var app = app || {};

var TodoList = Backbone.Collection.extend({
 // reference collections model
 model: app.Todo,

 // add local storage reference and use plugin
 localStorage: new Backbone.LocalStorage('todos-backbone'),

 // filter out the tasks that are completed
 completed: function() {
  return this.filter(function(todo) {
   return todo.get('completed');
  });
 },

 // filter out the tasks that are not completed
 remaining: function() {
  return this.without.apply( this, this.completed() );
 },

 // keep the tasks in sequential order
 nextOrder: function() {
  if (!this.length) {
   return 1;
  }
  return this.last().get('order') + 1;
 },

 // Tasks sorted by order of entry
 comparator: function(todo) {
  return todo.get('order');
 }
});

app.Todos = new TodoList();
