import { createApp } from 'vue';
import App from './App';
import router from './routes';
import store from './store';
import loadImage from './plugins/loadImage';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

createApp(App)
  .component('Fa', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(loadImage)
  .mount('#app');