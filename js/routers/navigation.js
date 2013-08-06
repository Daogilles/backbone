var app = app || {};

var NavigationRouter = Backbone.Router.extend({
    _data: null,
    _items: null,
    _view: null,

    routes: {
        "": "defaultRoute",
        "*project/:name/:titre": "showProject",
        "*project/:name": "albumProject"
        
    },
    initialize: function (options)
    {},
    defaultRoute: function (options){
        var _this = this;
        _this._homeView = new homeView({});
        _this._homeView.render();

        $.ajax({
            url: "projet_data.json",
            dataType: 'json',
            data: {},
            async: false,
            success: function (data)
            {
                _this._data = data;
                _this._items = new projetCollection(data);
                _this._view = new projetView({ model: _this._items });
                 _this._items.fetch();
                $('#work').html( _this._view.render().el );
            }
        });
        return this;
    },
    albumProject: function (project, name){

        var _this = this;
        _this._detailView = new projetDetailViewImg({});
        _this._detailView.render();
        console.log('hello')
        $.ajax({
            url: "projet_data.json",
            dataType: 'json',
            data: name,
            async: false,
            success: function (data)
            {
                _this._data = data;
                _this._items = new projetCollection(data);

                for(var i = 0, l = _this._items.models.length; i < l; i++)
                {
                    if(name == (_this._items.models[i].get('name'))){
                        _this.project = _this._items.models[i].get('album');
                        _this._view = new projetDetailView({ model: _this.project });

                        // _this._view.render();
                        $('.projet-detail').html( _this._view.render().el );
                        return this;
                    }
                } // End For
            } // End Success
        }); // End Ajax
        return this;
    }, // End albumProject()
    showProject: function( project,name, titre){
        var _this = this;
        var itemAlbum= [];
        _this._detailView = new projetDetailViewImg({});
        _this._detailView.render();
        console.log('hello 2')
        $.ajax({
            url: "projet_data.json",
            dataType: 'json',
            data: name,
            async: false,
            success: function (data)
            {
                _this._data = data;
                _this._items = new projetCollection(data);

                for(var i = 0, l = _this._items.models.length; i < l; i++)
                {
                    itemAlbum = _this._items.models[i].get('album');
                    console.log(itemAlbum[i].linkUrl)
                    if(titre == (itemAlbum[i].linkUrl)){
                        console.log('yeah')
                        _this.project = _this._items.models[i].get('album');
                        _this._view = new projetSlideView({ model: _this.project });
                        console.log(_this.project)
                        // _this._view.render();
                        $('.projet-detail').html( _this._view.render().el );
                        return this;
                    }
                } // End For
            } // End Success
        }); // End Ajax
        return this;
    }

});

var navigationRouter = new NavigationRouter;
Backbone.history.start();

                // for(var i = 0, l = _this._items.models.length; i < l; i++)
                // {
                //     itemAlbum = _this._items.models[i].get('album');
                //     console.log(itemAlbum[i]);

                //     if(titre == (itemAlbum[i].linkUrl)){
                //         console.log('if good')
                //         console.log(itemAlbum[i].pictures);

                //         _this.project = itemAlbum[i].pictures;
                //         console.log(_this.project)

                //         _this._view = new projetSlideView({ model: _this.project });
                //         console.log(_this._view)
                //         // _this._view.render();
                //         $('.projet-detail').html( _this._view.render().el );
                //         return this;
                //     }
                // } // End For