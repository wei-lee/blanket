fs = require("fs");

//simple file fixture
exports.simple_test_file_js = fs.readFileSync(__dirname+"/simple_test_file.js","utf-8");

exports.simple_test_file_instrumented_js = fs.readFileSync(__dirname+"/simple_test_file_instrumented.js","utf-8");

exports.simple_test_file_instrumented_full_js = fs.readFileSync(__dirname+"/simple_test_file_instrumented_full.js","utf-8");

//Block injection fixtures
exports.blockinjection_test_file_js = fs.readFileSync(__dirname+"/blockinjection_test_file.js","utf-8");

exports.blockinjection_test_file_instrumented_js = fs.readFileSync(__dirname+"/blockinjection_test_file_instrumented.js","utf-8");

//comment fixtures
exports.comment_test_file_js = fs.readFileSync(__dirname+"/comment_test_file.js","utf-8");

exports.comment_test_file_instrumented_js = fs.readFileSync(__dirname+"/comment_test_file_instrumented.js","utf-8");

