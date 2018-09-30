<template>
 <md-card md-with-hover> 
      <md-card-media>
        <img src="../assets/logo.png" alt="People">
      </md-card-media>
      <md-card-header>
        <div class="md-title">
          <!-- Title of Card -->
          {{getEvent().title}}</div>
      </md-card-header>
      <md-card-content>
        <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium deserunt nisi perspiciatis provident, molestiae aperiam dignissimos saepe eveniet praesentium necessitatibus. -->
        {{getEvent().content}} 
      </md-card-content>   
    </md-card>   
</template>
<script>
import eventValue from "../assets/data/DataValues.js";
export default {
  name: "EventDetails",
  props: {
    value: String
  },
  methods: {
    getEvent: function() {
      for (let i = 0; i < eventValue.eventinfo.length; i++) {
        if (eventValue.eventinfo[i].id === parseInt(this.value))
          return eventValue.eventinfo[i];
      }
    }
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
