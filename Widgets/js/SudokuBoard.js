/**
 * Created by sarahgilmore on 6/14/17.
 */
define([
    "dojo/_base/declare",
	"dojo/query",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "Sudoku/Widgets/js/SudokuCell",
    "dojo/text!../templates/SudokuBoard.html"
], function(declare, query, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, SudokuCell, template) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: template,

        constructor: function() {
            //TODO: args should have the initial state of hte board in an array when instantiating


            this.sudokuCellArrays = [];
            this.numberCells = 4;
            for (var i = 1; i <= this.numberCells; i++) {
            	this.sudokuCellArrays.push(new SudokuCell({'cellNumber':i, 'cellValue': 1}));
            }

        },

	    postCreate: function() {
            var widget = this;
            console.log(this.sudokuCellArrays.length);
            for (var i = 0; i < this.sudokuCellArrays.length; i++) {
                var cell = this.sudokuCellArrays[i];
                cell.placeAt(widget.sudokuBoardContainer, "last");
            }
	    },
	    //
	    // _addEventListener: function() {
		 //    query(".sudokuCell not:(.disabledSudokuCell)").on("click", function() {
		 //    	console.log("here");
		 //    });
	    // }

    });
});
