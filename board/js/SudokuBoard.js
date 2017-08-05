/**
 * Created by sarahgilmore on 6/14/17.
 */
define([
    "dojo/_base/declare",
	"dojo/query",
	"dojo/dom-construct",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "Sudoku/board/js/SudokuCell",
    "dojo/text!../templates/SudokuBoard.html"
], function(declare, query, domConstruct, _WidgetBase, _TemplatedMixin, SudokuCell, template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        constructor: function() {
            this.sudokuCells = [];
            this.numberCells = 81;
            this._constructSudokuCells();
        },

        _constructSudokuCells: function() {
            let cell;
        	for (let i = 0; i < this.numberCells; i++) {
				cell = new SudokuCell({
					cellPosition: i,
					cellValue: 0
				});
				this.sudokuCells.push(cell);
	        }
        },

	    postCreate: function() {
		    this._createBoard();
	    },

	    _createBoard: function() {
			let tableRow, tableCell;
			for (let i = 0; i < this.numberCells; i++) {
				if (i % 9 === 0) {
					tableRow = domConstruct.create("tr", {"class": "boardRow"});
					domConstruct.place(tableRow, this.boardTable, "last");
				}
				tableCell = domConstruct.create("td", {"class": "boardCell"});
				this.sudokuCells[i].placeAt(tableCell, "only");
				domConstruct.place(tableCell, tableRow, "last");
			}
	    },
    });
});
