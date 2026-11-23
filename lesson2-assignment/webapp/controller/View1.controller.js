sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "lesson2assignment/util/Greeting",
  ],
  function (Controller, MessageToast, Greeting) {
    "use strict";

    return Controller.extend("training.fiori.day1.controller.Main", {
      onSayHello: function () {
        const sMessage = Greeting.buildGreeting("SAPUI5 Developer");
        MessageToast.show(sMessage);
      },

      onPreviewName: function () {
        const sMessage = Greeting.buildGreeting("   Maria Silva ");
        MessageToast.show(sMessage);
      },

      onPreviewFallback: function () {
        const sMessage = Greeting.buildGreeting("");
        MessageToast.show(sMessage);
      },
    });
  },
);
