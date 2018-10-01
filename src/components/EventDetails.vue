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
      <div>
       <md-button class="md-raised md-accent md-color-btn" @click="click('going')" :class="{'checked' : getEvent().state.going}">Going</md-button>
       <md-button class="md-raised md-accent md-color-btn" @click="click('notGoing')" :class="{'checked' : getEvent().state.notGoing}">Not Going</md-button>
       <md-button class="md-raised md-accent md-color-btn" @click="click('notDecided')" :class="{'checked' : getEvent().state.notDecided}">Maybe</md-button>  
       </div>
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
      for (let i = 0; i < eventValue.eventinfo.events.length; i++) {
        if (eventValue.eventinfo.events[i].id === parseInt(this.value))
          return eventValue.eventinfo.events[i];
      }
    },
    click(response) {
      if (response == "going") {
        console.log("going");
        eventValue.setEventResponseAction(this.value, true, false, false);
      } else if (response == "notGoing") {
        console.log("not going");
        eventValue.setEventResponseAction(this.value, false, true, false);
      } else {
        console.log("not decided");
        eventValue.setEventResponseAction(this.value, false, false, true);
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
.checked {
  background-color: red;
}
</style>
