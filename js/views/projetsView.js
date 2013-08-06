var app = app || {};

var homeView = Backbone.View.extend({
    el: $('#main'),
    template:$('#home-tmpl').html(),

    render: function ()
    {
        $(this.el).html(this.template);
        return this;
    }

});


var projetView = Backbone.View.extend({
    // el: $('#work'),
    tagName : "div",
    className : "containerTitle",
    template: $('#projet-tmpl').html(),
    model: null,


    render: function ()
    {

        var items = [],
            attr;

        for(var i = 0, l = this.model.models.length; i < l; i++)
        {
            attr = _.template(this.template, {
                name: this.model.models[i].get('name'),
                position: this.model.models[i].get('id'),
                textContent: this.model.models[i].get('content')
            });
            items.push(attr);
        }
        
        $(this.el).html(items.join(''));

        return this;
    }
    
});