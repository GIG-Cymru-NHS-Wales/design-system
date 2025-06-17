"use strict";
// Copyright 2024 Google LLC. Use of this source code is governed by an
// MIT-style license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeprecationIds = exports.deprecations = void 0;
const version_1 = require("./version");
var deprecations_1 = require("./vendor/deprecations");
Object.defineProperty(exports, "deprecations", { enumerable: true, get: function () { return deprecations_1.deprecations; } });
/**
 * Converts a mixed array of deprecations, IDs, and versions to an array of IDs
 * that's ready to include in a CompileRequest.
 */
function getDeprecationIds(arr) {
    return arr.flatMap(item => {
        if (item instanceof version_1.Version) {
            return arr.map(item => item.toString());
        }
        else if (typeof item === 'string') {
            return item;
        }
        return item.id;
    });
}
exports.getDeprecationIds = getDeprecationIds;
//# sourceMappingURL=deprecations.js.map