const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/fechas.json','utf-8'));