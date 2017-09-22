/** A bot that is targetted at a specific region. */

var request = require('request-promise-native');

var config = require('./config');

/**
 * @param {String} countryCode
 * @param {String} provinceCode
 */
function RegionScanner(countryCode, provinceCode) {
  this.countryCode = countryCode;
  this.provinceCode = provinceCode;
  this._zoneGroups = [];
}

RegionScanner.prototype.initialize = function () {
  // load zonegroup
  return request.get(`${config.API_URL}/places/${this.countryCode}/provinces/${this.provinceCode}/zoneGroups`).then((zoneGroups) => {
    this._zoneGroups = zoneGroups;
  });
};

module.exports = RegionScanner;