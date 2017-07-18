$(document).ready(function(){

/* ==========================================================================
	Tables
	========================================================================== */

	var $table = $('#tableinvoices'),
		$remove = $('#remove'),
		selections = [];

	function clientInvoiceNoFormatter(data, rowData, index) {
		var clientName = rowData.client;
		return	'<div><div class="tbl-invoice-client">'+ clientName +'</div><div class="tbl-invoice-no">'+ data +'</div></div>';
	}

	function statusFormatter(data, rowData, index) {
		var amount = rowData.amount;
		return	'<div><div class="tbl-invoice-amount">$'+ amount +'</div><div class="tbl-invoice-status">'+ data +'</div></div>';
	}

	function getIdSelections() {
		return $.map($table.bootstrapTable('getSelections'), function (row) {
			return row.id
		});
	}

	var data = [
		{
			"id": 1,
			"client":"Client Name 1",
			"invoicenumber": "0000431",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 2,
			"client":"Client Name 2",
			"invoicenumber": "0000432",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321",
			"status":"Draft",
		},
		{
			"id": 3,
			"client":"Client Name 3",
			"invoicenumber": "0000433",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 4,
			"client":"Client Name 4",
			"invoicenumber": "0000434",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 5,
			"client":"Client Name 5",
			"invoicenumber": "0000435",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 6,
			"client":"Client Name 6",
			"invoicenumber": "0000436",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 7,
			"client":"Client Name 7",
			"invoicenumber": "0000437",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 8,
			"client":"Client Name 8",
			"invoicenumber": "0000438",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 9,
			"client":"Client Name 9",
			"invoicenumber": "0000439",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 10,
			"client":"Client Name 10",
			"invoicenumber": "0000410",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		},
		{
			"id": 11,
			"client":"Client Name 11",
			"invoicenumber": "0000424",
			"issueddate": "06/07/2017",
			"duedate":"In 12 days",
			"amount":"321.21",
			"status":"Draft",
		}
	];
	$table.bootstrapTable({
		iconsPrefix: 'font-icon',
		icons: {
			paginationSwitchDown:'fa fa-caret-square-o-down',
			paginationSwitchUp: 'fa fa-caret-square-o-up',
			refresh: 'fa fa-refresh',
			toggle: 'fa fa-th',
			columns: 'fa fa-th-list',
			export: 'fa fa-download',
			detailOpen: 'font-icon-plus',
			detailClose: 'font-icon-minus-1'
		},
		paginationPreText: '<i class="fa fa-arrow-left"></i>',
		paginationNextText: '<i class="fa fa-arrow-right"></i>',
		data: data,
		columns: [
			[
				{
					field: 'state',
					checkbox: true,
					align: 'center',
					valign: 'middle'
				},
				{
					title: 'Client / Invoice Number',
					field: 'invoicenumber',
					align: 'left',
					valign: 'middle',
					sortable: true,
					formatter: clientInvoiceNoFormatter
				},
				{
					title: 'Issued Date',
					field: 'issueddate',
					align: 'center',
					valign: 'middle',
					sortable: true
				},
				{
					title: 'Due Date',
					field: 'duedate',
					align: 'center',
					valign: 'middle',
					sortable: true
				},
				{
					title: 'Amount / Status',
					field: 'status',
					align: 'right',
					valign: 'middle',
					sortable: true,
					formatter: statusFormatter
				},
			]
		]
	});

	$table.on('check.bs.table uncheck.bs.table ' +
		'check-all.bs.table uncheck-all.bs.table', function () {
		$remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
		// save your data, here just save the current page
		selections = getIdSelections();
		// push or splice the selections if you want to save all data selections
	});

	$remove.click(function () {
		var ids = getIdSelections();
		$table.bootstrapTable('remove', {
			field: 'id',
			values: ids
		});
		$remove.prop('disabled', true);
	});

	$('#toolbar').find('select').change(function () {
		$table.bootstrapTable('refreshOptions', {
			exportDataType: $(this).val()
		});
	});

/* ========================================================================== */
});
