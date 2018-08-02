'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _jestEach = require('jest-each');

/**
 * Copyright (c) 2018-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

exports.default = environment => {
  environment.global.it.each = (0, _jestEach.bind)(environment.global.it);
  environment.global.fit.each = (0, _jestEach.bind)(environment.global.fit);
  environment.global.xit.each = (0, _jestEach.bind)(environment.global.xit);
  environment.global.describe.each = (0, _jestEach.bind)(
    environment.global.describe
  );
  environment.global.xdescribe.each = (0, _jestEach.bind)(
    environment.global.xdescribe
  );
  environment.global.fdescribe.each = (0, _jestEach.bind)(
    environment.global.fdescribe
  );
};
