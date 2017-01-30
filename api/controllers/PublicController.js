/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	publicVars: function(req, res) {
	  var json = {
	    publicVars: sails.config.publicVars
	  };
	  res.json(200, json);
	}
};
