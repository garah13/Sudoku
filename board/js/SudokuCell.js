define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-style",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!../templates/SudokuCell.html"
  ], function(declare, on, mouse, domClass, domAttr, domStyle, _WidgetBase, _TemplatedMixin, template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        constructor: function(args) {
            this.cellPosition = args.cellPosition;
            this.cellValue = args.cellValue;
            this.canSetCellValue = true;
        },

        postCreate: function() {
            this._addEventListeners();

        },

        _addEventListeners: function() {
            var widget = this;
            // domAttr.set(this.cellText, "textContent", this.cellValue);

        },

        getCellValue: function() {
            return this.cellValue;
        },

        getCellPosition: function() {
            return this.cellPosition;
        },

        setCellValue: function(value) {
            if (this.canSetCellValue) {
                if (0 < value && value < 10) {
                    this.cellValue = value;

                }
            }
        },

        isCellModifiable: function() {
            return this.canSetCellValue;
        }

    });
});
