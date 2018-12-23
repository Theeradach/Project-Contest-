<template>
    <div>
        <!-- navbar -->
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" href="#">Logo</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link :to="{ name: 'FrequentItem' }" >BEST SELLERS PRODUCTS</router-link></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        <!-- navbar -->

        <!-- recieve data from textbox -->

        <div class="jumbotron text-center">
            <h1>Promotions Helper</h1> 
            <p>We help you increase your sales</p> 
        

            <form class="form-inline">
                <div class="input-group">
                <input class="form-control" v-model="message" size="50" placeholder="Enter products you want to makes promotions" required>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-danger" v-on:click="predict(message)">Get Item</button>
                </div>
                </div>
            </form>
        </div>
        

        <p>{{ message }}</p>
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                    <table class="table table-hover" style="float:center">
                        <thead>
                            <tr>
                                <th><h3> Promotions</h3></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="promotions in itemPredict.rhs">
                                <td><h4>{{ promotions | cut }}</h4></td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>
            <div class="col-sm-4">
                    <table class="table table-hover" align="center">
                        <thead>
                            <tr>
                                <th><h3> Confidence</h3></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="confidence in itemPredict.confidence">
                                <td><h4>{{ confidence }}</h4></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div class="col-sm-4">
                     <table class="table table-hover" align="center">
                        <thead>
                            <tr>
                                <th><h3> Count</h3></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="count in itemPredict.count">
                                <td><h4>{{ count }}</h4></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
        </div>
        
        <!-- chart js  -->
        <div id="chartTopics"><h3>PlanetChart : Products </h3></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                        <div id="app">
                            
                            <canvas id="planet-chart"></canvas>
                        </div>
                </div>
                
                <div class="col-sm-2"></div>
            </div>
        </div>

        <div id="chartPieTopics"><h3>PirChart : Products </h3></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                        
                        <canvas id="doughnutChart"></canvas>
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
        
        <!-- chart js  -->

    </div>
</template>

<script>
    import planetChartData from './chart-data.js';

    export default {
        
        data(){
            return{
                items: [],
                message: '',
                itemPredict: [],
                chartData: [],
                chartItem: [],
            }
        },
        
        created: function()
        {
            this.fetchItems();
        },
        filters: {
        cut: function (value) {
                if (!value) return ''
                var len = value.length
                value = value.toString()
                return value.substring(1, len-1)
            }
        },

        mounted() {
            
            var chart = document.getElementById("chartTopics");    
            var pieChart = document.getElementById("chartPieTopics");  

            chart.style.display = "none";           // display chart topics
            pieChart.style.display = "none";        // display chart topics
        },

        methods: {
            
            createChart(chartId , chartData , chartItem) {   
                var chart = document.getElementById("chartTopics");
                var pieChart = document.getElementById("chartPieTopics");  
                chart.style.display = "block";
                pieChart.style.display = "block";
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                type: 'bar', // was "line"
                data: {
                    labels: chartData,
                    datasets: [
                        {
                        label: 'Products',
                        type: 'bar', // Add this
                        data: chartItem,
                        backgroundColor: [
                            'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)'   
                        ],

                        borderColor: [
                            '#36495d','#36495d','#36495d','#36495d','#36495d'    
                        ],
                        borderWidth: 3
                        }
                    ]
                },
                options: {
                    options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                        ticks: {
                            fontSize: 40,
                            beginAtZero: true,
                            padding: 25,
                        }
                        }]
                    }
                    }
                },
                });
            },
            createPieChart(chartId , chartData , chartItem) {    
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                type: 'doughnut', // was "line"
                data: {
                    labels: chartData,
                    datasets: [
                        {
                        label: 'Products',
                        data: chartItem,
                        backgroundColor: [
                            'rgba(255,99,132,1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)'   
                        ],
                        borderColor: [
                            '#36495d','#36495d','#36495d','#36495d','#36495d'    
                        ],
                        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"],
                        borderWidth: 3
                        }
                    ]
                },
                options: {
                    options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                        ticks: {
                            fontSize: 40,
                            beginAtZero: true,
                            padding: 25,
                        }
                        }]
                    }
                    }
                },
                });
            },
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            },
            predict(message)
            {
                message = message.trim();
                let newMess = '';
                let uri = '';
                if(message.includes(" ")){
                    newMess = message.replace(" ", "+");
                    uri = 'http://localhost:4000/items/predict/'+ newMess.trim();
                    console.log("client url : " + uri);
                }
                else{
                    uri = 'http://localhost:4000/items/predict/'+ message.trim();
                    console.log("client url : " + uri);
                }
                
                this.axios.get(uri)
                .then(response => {
                    this.itemPredict = response.data;
                    this.chartData = this.itemPredict.rhs.map(list => {
                        return list;
                    });
                    console.log(this.chartData);
                    this.chartItem = this.itemPredict.confidence.map(list => {
                        return list;
                    });
                    console.log(this.chartItem);

                    this.createChart('planet-chart', this.chartData , this.chartItem );
                    this.createPieChart('doughnutChart', this.chartData , this.chartItem );
                })
                .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                    .finally(() => this.loading = false);
            }
        }
    }
</script>

<style>
h1,h2,h3,h4,h5,p{
     font-family: 'Lato', sans-serif;
}
.jumbotron { 
    background-color: #f4511e; /* Orange */
    color: #ffffff;
    margin-top: -10px;
}

/* navbar */
.navbar {
  margin-bottom: 0;
  background-color: #f4511e;
  z-index: 9999;
  border: 0;
  font-size: 12px !important;
  line-height: 1.42857143 !important;
  letter-spacing: 4px;
  border-radius: 0;
}

.navbar li a, .navbar .navbar-brand {
  color: #fff !important;
  margin-right: 10px;
}

.navbar-nav li a:hover, .navbar-nav li.active a {
  color: #f4511e !important;
  background-color: #fff !important;
}

.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}

</style>