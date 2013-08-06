var app = app || {};

var menuCollection = Backbone.Collection.extend({
	model: menuModel,
	comparator: function (item)
    {
        return item.get("position");
    }
});			