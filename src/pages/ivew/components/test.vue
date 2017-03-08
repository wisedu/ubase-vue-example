<template>
  <div>
    <div @click="$emit('on-test')">hello world {{options.p1}}</div>
  </div>
</template>
<script>
  export default {
    props: {options: Object, event: Object},
    created(){
      var events = _.keys(this.event)

      events.forEach((event)=>{
          this.$on(event, this.event[event])
      })
    },
    ready(){
    }
  }
</script>
