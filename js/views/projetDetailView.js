var app = app || {};

var projetDetailViewImg = Backbone.View.extend({
    el: $('#main'),
    template:$('#projetDetail-tmpl').html(),

    render: function ()
    {
        $(this.el).html(this.template);
        return this;
    }

});

var projetDetailView = Backbone.View.extend({
    // el: $('.picture'),
    tagName : "div",
    className : "container",
    template:$('#projetDetailImg-tmpl').html(),
    model: null,

    render: function ()
    {
        var items = [],

            attr;
        console.log(this.model)
        for(var i = 0, l = this.model.length; i < l; i++)
        {
            attr = _.template(this.template, {
                number : i+1,
                category : this.model[i].category,
                name: this.model[i].linkUrl,
                id : this.model[i].id,
                titre : this.model[i].titre,
                descr : this.model[i].descr,
                picture: this.model[i].url
            });

            items.push(attr);
        }

        $(this.el).html(items.join(''));
        return this;
    }
    
});

var projetSlideView = Backbone.View.extend({
    // el: $('.picture'),
    tagName : "ul",
    className : "containerSlide",
    template:$('#slide-tmpl').html(),
    model: null,

    render: function ()
    {
        var items = [],
            attr;

            console.log('hey')
            console.log(this.model)

        for(var i = 0, l = this.model.length; i < l; i++)
        {
            attr = _.template(this.template, {
                number : i+1,
                picture: this.model[i].url
            });
            items.push(attr);
        }

       console.log(items)

        $(this.el).html(items.join(''));
        return this;
    }
    
});
