import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage'
import Machine from './components/Machine.vue';

var _ = require('lodash');

Vue.use(VueLocalStorage);

Vue.filter('slugify', function (text) {
  return text.toLowerCase()
     .replace(/\s+/g, '-')
     .replace(/[^\w\-]+/g, '')
     .replace(/\-\-+/g, '-')
     .replace(/^-+/, '')
     .replace(/-+$/, '');
});

new Vue({
  el: '#app',
  components: {
    'drum-machine': Machine
  }
});
