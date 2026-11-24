sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("day01assignment.controller.View1", {
      onSayHello: function () {
        MessageToast.show("Hello from SAPUI5!");
      },

      onInit() {
        const oPage = this.byId("page");
        console.log(oPage);
      },

      onShowCourseInfo: function () {
        MessageToast.show("This app uses an XML View and a Controller.");
      },

      onShowStudyTip: function () {
        MessageToast.show("Change one thing, then test it.");
      },
      onShowNextStep: function () {
        MessageToast.show("Toggle Footer with last Button.");
      },

      onToggleFooter: function () {
        const oPage = this.byId("page");
        oPage.setShowFooter(!oPage.getShowFooter());
        MessageToast.show(
          oPage.getShowFooter() ? "Footer is shown!" : "Footer is hidden!",
        );
      },
    });
  },
);
