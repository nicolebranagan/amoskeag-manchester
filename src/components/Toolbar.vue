<template>
  <div id="toolbar">
    <div class="userbar">
      <i class="fa fa-bookmark fa-2x gamebutton" title="Restore"></i>
      <i class="fa fa-save fa-2x gamebutton" title="Save"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar'
}
</script>

<style scoped>
#toolbar {
  background-color: #666666;
  height: 4em;
  width: 100%;
  bottom: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.userbar {
  margin-top: 0.5em;
  margin-left: 1em;
  margin-right: 1em;
  height:100%;
  vertical-align: middle;
  text-align: right;
}

.gamebutton {
  color: #DDD;
}

.gamebutton:hover {
  color: #FFF;
}

.gamebutton:active {
  color: #999;
}

i {
  height:100%;
  width: 2em;
  text-shadow: 0px 2px rgba(0,0,0,0.5);
  background-clip: text;
}
</style>
