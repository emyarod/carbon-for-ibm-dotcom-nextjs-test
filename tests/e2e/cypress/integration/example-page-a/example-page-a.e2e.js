/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("Example page A page", () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
  });

  it("should load the default example-page-a page", () => {
    cy.visit("/example-page-a.html");

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | default");
  });
});
