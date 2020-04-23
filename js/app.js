$.ajax({    // ajax call to get the data to create the chart
    url: 'php/server.php',
    method: 'GET',
    success: function(data) {
        if (data.fatturato.type == 'line') {
            chartSalesMonth(data.fatturato.data);
        }

        var objectData = data.fatturato_by_agent.data;  // object with the data and labels for the sales-salesman chart

        var salesSalesman = [];
        var salesman = [];
        for (var key in objectData) {   // i push in the arrays above the names of the salesman and their sales
            salesman.push(key);
            salesSalesman.push(objectData[key]);
        }

        if (data.fatturato_by_agent.type == 'pie') {
            chartSalesByAgent(salesSalesman, salesman);
        }

    },
    error: function(error) {
        alert('errore ' + error)
    }
});



// FUNZIONI UTILIZZATE


function chartSalesMonth(data) {    // this function creates a line chart with the data provided
    var ctx = $('#sales-month');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets: [{
                label: 'Monthly Sales',
                backgroundColor: '#2E4691',
                borderColor: '#2E4691',
                data: data
            }]
        },
        options: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Vendite mensili'
            },
        }
    });
}


function chartSalesByAgent(salesSalesman, salesman) {       // this function creates a pie chart with the data provided
    var ctx = $('#sales-salesman');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: salesSalesman,
                backgroundColor: ['#309FDB', '#E95B54', '#FBCE4A', '#3CAF85']
            }],
            labels: salesman
        },
        options: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Vendite di ogni venditore'
            },
        }
    });
}
