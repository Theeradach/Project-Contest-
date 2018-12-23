<template>
  <div class="container">
      <div class="col-xs-3">
        <input class="form-control" id="ex2" type="text" v-model="message">
      </div>
      <div class="col-xs-9"></div>
    <button type="button" class="btn btn-primary">Get Item</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
          message: "Hello Vue"
        }
    }
}
</script>