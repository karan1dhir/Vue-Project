<template>
  <div class="details">
    <h1>{{$route.params.id}}</h1>
    <div><EventDetails></EventDetails></div>
  </div>
</template>
<script>
import EventDetails from '@/components/EventDetails.vue'
export default {
  name: 'Details',
  components: {
    EventDetails
  }
}
</script>