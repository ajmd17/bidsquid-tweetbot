var bot = require('./bot');
var RegionScanner = require('./region-scanner');

bot.post('hello world');

var rs = new RegionScanner('US', 'PA');
rs.initialize();