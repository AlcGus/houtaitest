<template>
   <div>
       <linechart></linechart>
       <barchart></barchart>
   </div>
</template>
<script>
import linechart from '../subComponents/topSubComponents/lineChart'
import barchart from "../subComponents/topSubComponents/barChart"
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      linechart,
      barchart
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style scoped>
</style>
