/**
 * XadillaX created at 2016-05-22 16:43:38 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

var _cookieParser = require("cookir-parser");

var CookieParser = function(akyuu, options) {
    this.akyuu = akyuu;
    this.options = options || {};
    this.position = this.akyuu.PLUGIN_POS.BEFORE_CONTROLLER;
};

CookieParser.prototype.plug = function() {
    this.akyuu.use(_cookieParser(this.options.secret, this.options));
};

exports.create = function(akyuu, options) {
    return new CookieParser(akyuu, options);
};
