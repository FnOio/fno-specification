/**
 * Created by bjdmeest on 10/06/2016.
 */

var fs = require('fs');
var path = require('path');

var dateString = (new Date()).toISOString().split('T')[0].replace(/-/g, '');

try {
    fs.mkdirSync(path.resolve(__dirname, dateString));
} catch (e) {

}

var files = fs.readdirSync(path.resolve(__dirname));
var dirs = [];
for (var i = 0; i < files.length; i++) {
    if (fs.lstatSync(path.resolve(__dirname, files[i])).isDirectory()) {
        dirs.push(files[i]);
    }
}

dirs.sort();
dirs.reverse();
if (dirs[0] === dateString) {
    dirs.splice(0, 1);
}

var html = fs.readFileSync('./function.html', 'utf8');
html = html.replace(/%thisDate%/g, dateString);
html = html.replace(/%prevDate%/g, dirs[0]);
fs.writeFileSync(path.resolve(__dirname, 'index.html'), html);
html = html.replace(/\.\.\/resources/g, '../../resources');
fs.writeFileSync(path.resolve(__dirname, dateString, 'index.html'), html);

