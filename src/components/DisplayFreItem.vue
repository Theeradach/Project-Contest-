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
                    <li><a href="#pricing">BEST SELLERS PRODUCTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <!-- navbar -->

        <div class="jumbotron text-center">
            <h1>Promotions Helper</h1> 
            <p>We help you increase your sales</p> 
        </div>

        <h2>Best Seller Products Years 2018</h2>

        <!-- data -->
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
                            <tr v-for="promotions in items.items">
                                <td><h4>{{ promotions | cut }}</h4></td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>
            <div class="col-sm-4">
                    <table class="table table-hover" align="center">
                        <thead>
                            <tr>
                                <th><h3> Support</h3></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="support in items.support">
                                <td><h4>{{ support }}</h4></td>
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
                            <tr v-for="count in items.count">
                                <td><h4>{{ count }}</h4></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
        </div>
        <!-- data -->

    </div>
</template>

<script>
  export default {
    data(){
        return{
          items:[],
        }
    },
    created: function()
    {
            this.callFreItem();
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
        this.callFreItem();
    },
    methods: {
      
      callFreItem(){
        let uri = 'http://localhost:4000/items/frequentItem';
        this.axios.get(uri).then((response) => {
            this.items = response.data;
        });
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