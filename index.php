<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Advanced Dashboard Charts</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </head>
    <body>

        <div class="container">         <!-- contains the monthly sales chart -->
            <canvas id="sales-month"></canvas>
        </div>
        <div class="container">         <!-- contains the sales of the salesman -->
            <canvas id="sales-salesman"></canvas>
        </div>



        <!-- Alternative methods (really really ugly) -->
            <!-- <div class="container">                                                                // method 4
                < ?php include 'database.php' ?>
                <canvas id="sales-month" data-database="< ?php echo $database ?>"></canvas>
            </div> -->
            <!-- <script type="text/javascript">
            /*
                < ?php // $data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]; ?>  // method 1
                < ?php include 'database.php' ?>                                                     // method 2
                // var dati = < ?php echo json_encode($data) ?>                                      // method 2
                // var dati = < ?php echo $database ?>                                                  // method 3

                // var dati = $('#sales-month').data('database');                                           // method 4
                var ctx = $('#sales-month');
                var chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                        datasets: [{
                            label: 'Monthly Sales',
                            backgroundColor: '#2E4691',
                            borderColor: '#2E4691',
                            data: dati
                        }]
                    },
                });
            */
            </script> -->
        <!-- end bad methods -->


        <script src="js/app.js" charset="utf-8"></script>
    </body>
</html>
