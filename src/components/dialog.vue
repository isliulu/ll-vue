<template>
  <div class="el-dialog"   ref="dialog">
    <div class="dialog-header" >
      <span class="dialog-title">{{title}}</span>
    </div>
    <div class="dialog-body" >
      <slot></slot>
    </div>
    <div class="dialog-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
  }
  }

</script>

<style scoped>

</style>
