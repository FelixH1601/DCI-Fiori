sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("f7lists.controller.View1", {
      onInit() {
        const data = {
          cities: [
            {
              name: "Berlin",
              federalState: "Berlin",
              citizens: 3700000,
            },
            {
              name: "Hamburg",
              federalState: "Hamburg",
              citizens: 1870000,
            },
            {
              name: "München",
              federalState: "Bayern",
              citizens: 1510000,
            },
            {
              name: "Düsseldorf",
              federalState: "Nordrhein-Westfalen",
              citizens: 620000,
            },
            {
              name: "Stuttgart",
              federalState: "Baden-Württemberg",
              citizens: 606000,
            },
            {
              name: "Bremen",
              federalState: "Bremen",
              citizens: 563000,
            },
            {
              name: "Dresden",
              federalState: "Sachsen",
              citizens: 555000,
            },
            {
              name: "Hannover",
              federalState: "Niedersachsen",
              citizens: 536000,
            },
            {
              name: "Wiesbaden",
              federalState: "Hessen",
              citizens: 279000,
            },
            {
              name: "Kiel",
              federalState: "Schlesweig-Holstein",
              citizens: 246000,
            },
            {
              name: "Magdeburg",
              federalState: "Sachsen-Anhalt",
              citizens: 236000,
            },
            {
              name: "Mainz",
              federalState: "Rheinland-Pfalz",
              citizens: 218000,
            },
            {
              name: "Erfurt",
              federalState: "Thüringen",
              citizens: 213000,
            },
            {
              name: "Potsdam",
              federalState: "Brandenburg",
              citizens: 183000,
            },
            {
              name: "Saarbrücken",
              federalState: "Saarland",
              citizens: 180000,
            },
            {
              name: "Schwerin",
              federalState: "Mecklenburg-Vorpommern",
              citizens: 96000,
            },
          ],
        };

        const model = new JSONModel(data);

        this.getView().setModel(model);
      },

      onShowDetails: function (oEvent) {
        var oButton = oEvent.getSource();
        var sFederalState = oButton.data("itemName");
        MessageToast.show(`Federal State: ${sFederalState}`);
      },
    });
  },
);
