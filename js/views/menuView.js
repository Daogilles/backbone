var app = app || {};

var MenuView = Backbone.View.extend({
    el: $('#menu'),
    template: $('#menu-tmpl').html(),
    model: null,
    render: function ()
    {
        this.el.empty();

        console.log('render');

        var items = [],
            content;

        for(var i = 0, l = this.model.models.length; i < l; i++)
        {
            content = _.template(this.template, {
                name: this.model.models[i].get('name'),
                position: this.model.models[i].get('position')
            });
            items.push(content);
        }
        
        this.el.html(items.join(''));

        return this;
    },
    events: {
        "click a": "onClick"
    },
    onClick: function() {
        console.log('click');
        
    }
});