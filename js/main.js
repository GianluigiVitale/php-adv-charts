

$.ajax({    // ajax call to get the data to create the chart
    url: 'server.php',
    method: 'GET',
    success: function(data) {
        chartSalesMonth(data);
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
    });
}
