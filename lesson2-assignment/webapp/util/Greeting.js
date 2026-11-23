sap.ui.define([], function () {
  "use strict";
  return {
    buildGreeting: function (sName) {
      return sName?.trim().length === 0
        ? "Hello, Developer!"
        : "Hello, " + sName.trim() + "!";
    },
  };
});
