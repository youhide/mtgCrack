/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	publicVars: function (req, res) {
		var json = {
			publicVars: sails.config.publicVars
		};
		res.status(200).json(json);
	}
};
