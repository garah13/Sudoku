define([
    "dojo/_base/declare",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-class",
    "dojo/dom-style",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!../templates/SudokuCell.html"
  ], function(declare, on, mouse, domClass, domStyle, _WidgetBase, _TemplatedMixin, template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        constructor: function(args) {
            this.cellNumber = args.cellNumber;
            this.cellValue = args.cellValue;
            this.canSetCellValue = true;
            if (!this.cellValue) {
                this.canSetCellValue = false;
                //add a class saying unmodifiable
	            //domClass.add(this.domNode, "disabledSudokuCell");
            }

            //Display number in svg
        },

        postCreate: function() {
            if (this.canSetCellValue) {
	            this._addEventListeners();
            }
        },

        _addEventListeners: function() {
            var widget = this;

            on(this.sudokuCell, mouse.enter, function() {
               domStyle.set(widget.sudokuRectangle, "fill", "red");
            });

	        on(this.sudokuCell, mouse.leave, function() {
		        domStyle.set(widget.sudokuRectangle, "fill", "black");
	        });
        },

        getCellValue: function() {
            return this.cellValue;
        },

        getCellNumber: function() {
            return this.cellNumber;
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
