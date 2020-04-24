$.ajax({    // ajax call to get the data to create the chart
    url: 'php/server.php',
    method: 'GET',
    success: function(data) {
        chartSalesMonth(data.fatturato.type, data.fatturato.data);

        var objectData = data.fatturato_by_agent.data;  // object with the data and labels for the sales-salesman chart
        var salesSalesman = [];
        var salesman = [];
        for (var key in objectData) {   // I push in the arrays above the names of the salesman and their sales
            salesman.push(key);
            salesSalesman.push(objectData[key]);
        }
        chartSalesByAgent(data.fatturato_by_agent.type, salesSalesman, salesman);


        var objectEff = data.team_efficiency.data;  // object with the data and labels for the team-efficiency chart
        var nameTeams = [];
        var effTeams = [];
        for (var key in objectEff) {
            nameTeams.push(key);
            effTeams.push(objectEff[key]);
        }
        chartEfficiencyTeams(data.team_efficiency.type, nameTeams[0], nameTeams[1], nameTeams[2], effTeams[0], effTeams[1], effTeams[2]);

    },
    error: function(error) {
        alert('errore ' + error)
    }
});



// FUNZIONI UTILIZZATE


function chartSalesMonth(type, data) {    // this function creates a line chart with the data provided
    var ctx = $('#sales-month');
    var chart = new Chart(ctx, {
        type: type,
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


function chartSalesByAgent(type, salesSalesman, salesman) {       // this function creates a pie chart with the data provided
    var ctx = $('#sales-salesman');
    var myPieChart = new Chart(ctx, {
        type: type,
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


function chartEfficiencyTeams(type, label1, label2, label3, effTeam1, effTeam2, effTeam3) {       // this function creates a line chart with multiple datasets provided
    var ctx = $('#team-efficiency');
    var chart = new Chart(ctx, {
        type: type,
        data: {
            labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            datasets:
            [
                {
                label: label1,
                borderColor: '#2E4691',
                data: effTeam1
                },
                {
                label: label2,
                borderColor: '#3CAF85',
                data: effTeam2
                },
                {
                label: label3,
                borderColor: '#FBCE4A',
                data: effTeam3
                }
            ]
        },
        options: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Efficienza dei Team'
            },
        }
    });
}
