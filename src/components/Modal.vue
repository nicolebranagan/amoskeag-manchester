<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return { }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #400;
  border-style: double;
  border-color: #300;
  border-width: 0.25em;
  box-shadow: 0.5em 0.5em rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  min-height: 50%;
  color: #EEEEE0;
}

.modal-header {
  margin-top: 0;
  text-align: center;
  color: #EEEEEE;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

button {
  border-radius: 9px;
  text-shadow: 1px 1px 0px #444444;
  box-shadow: 4px 4px rgba(0, 0, 0, .33);
  color: #ffffff;
  font-size: 16px;
  background: #0023eb;
  padding: 7px 10px 7px 10px;
  text-decoration: none;
  border: none;
  outline: none;
}

button:hover {
  background: #1033fb;
}

button:active {
  color: #eeeeee;
  background: #0003cb;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
