/* jshint esversion: 6 */

module.exports = function() {
    return {
        home(req, res) {
            return res.render('./main/home', {
                user: req.user
            });
        }
    };
};