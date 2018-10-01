<template>
<div class="container m-t-md">
    <div class="row">
   <div class="col-xs-12 col-md-4" v-for="item in eventValue.eventinfo.events">     
   <md-card md-with-hover> 
      <md-ripple>
      <md-card-media>
        <img src="../assets/logo.png" alt="People">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{item.title}}</div>
      </md-card-header>
      <md-card-content>
      {{item.content}}
      </md-card-content>
      <md-card-actions>
      <router-link :to="{name:'event-details',params: {id: item.id}}">Get Details</router-link>
      </md-card-actions>
      </md-ripple>    
    </md-card>
</div> 
</div>
</div>
</template>
<script>
import eventValue from "../assets/data/DataValues.js";
export default {
  name: "Event",
  props: {
    value: String
  },
  data() {
    return {
      eventValue
    };
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>