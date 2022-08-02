"use strict";

import {MimeTypes} from "../index.js";

QUnit.module("MimeTypes");

assertEqual("text/html", MimeTypes.Text.Html);
assertEqual("text/plain", MimeTypes.Text.Plain);

function assertEqual(expected, actual) {
    QUnit.test("Test " + expected, (assert) => assert.equal(expected, actual));
}
