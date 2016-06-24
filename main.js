


function httpRequest(callback) {

	var stocks = localStorage.stocks || 'CRM';

	var url = 'http://finance.yahoo.com/webservice/v1/symbols/' + stocks + '/quote?format=json&view=detail'

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

// render

function showResult(result) {

	var table = '<table><thead><tr><th>Stock</th><th>Market Price</th><th>Del</th></tr></thead><tbody>';
	result = JSON.parse(result);
	result = result.list.resources[0].resource.fields;

	table += '<tr>';
	table += '<td>' + result.symbol + '</td>';
	table += '<td>' + result.price + '</td>';
	table += '<td>' + parseFloat(result.change).toFixed(2) + ' (' +  parseFloat(result.chg_percent).toFixed(2) + '%)' + '</td>';
	table += '</tr>';

	table += '</tbody></table>';

	document.getElementById('stock').innerHTML = table;
}

// add 

document.getElementById('addBtn').onclick = function() {
	var add = document.getElementById('add'),
		addBtn = document.getElementById('addBtn');
		
	var input = document.createElement('input');
	input.type = 'text';
	input.id = 'newStock';

	var saveBtn = document.createElement('input');
	saveBtn.type = 'button';
	saveBtn.id = 'saveBtn';
	saveBtn.value = 'save';

	add.removeChild(addBtn);
	add.appendChild(input);
	add.appendChild(saveBtn);

	document.getElementById('saveBtn').onclick = function() {
		var newStock = document.getElementById('newStock').value; 
		var stocks = localStorage.stocks && localStorage.stocks.split(',') || ['sh000001'];
		stocks.push(newStock);
		localStorage.stocks = stocks;
		httpRequest(showResult);

		add.removeChild(input);
		add.removeChild(saveBtn);
		add.appendChild(addBtn);
	}
}

httpRequest(showResult);


