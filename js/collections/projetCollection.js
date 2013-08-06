var app = app || {};

var projetCollection = Backbone.Collection.extend({
	model: projetModel,
    url: "/"
	// comparator: function (item)
 //    {
 //        return item.get("id");
 //        console.log(name);
 //     }
    //,
    // getProjectByName: function () {
    // 	// TODO: SEEK 
    // 	// tableau tt les model
    // 	// rechercher correspondance nom -> retourner bon model
        
    //     var modelProjet = new projetModel();

    //     console.log('abfd'+modelProjet);
    //     // var projetName = this.projetCollection.indexOf(modelProjet);
    //     // console.log(projetName);

    // 	// console.log(projectName);

    // 	// return projectName;
    // }
});			