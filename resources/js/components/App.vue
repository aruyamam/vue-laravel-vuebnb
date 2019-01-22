<template>
  <div>
    <div id="toolbar">
      <router-link :to="{ name: 'home' }">
        <img class="icon" src="/images/logo.png" alt="logo">
        <h1>vuebnb</h1>
      </router-link>
      <ul class="links">
        <li>
          <router-link :to="{ name: 'saved' }">Saved</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }">Log In</router-link>
        </li>
        <li>
          <a @click="logout">Log Out</a>
          <form id="logout" action="/logout" method="POST" style="display: hidden">
            <input type="hidden" name="_token" :value="csrf_token">
          </form>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>
<script>
import CustomFooter from './CustomFooter';

export default {
   components: {
      CustomFooter,
   },
   data() {
      return {
         csrf_token: window.csrf_token,
      };
   },
   methods: {
      logout() {
         document.getElementById('logout').submit();
      },
   },
};
</script>
<style>
#toolbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

#toolbar .icon {
  display: inline-block;
  height: 34px;
  padding: 16px 12px 16px 24px;
}

#toolbar h1 {
  display: inline-block;
  margin: 0;
  color: #4fc08d;
  font-size: 28px;
}

#toolbar a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

#toolbar ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 24px 0 0;
  margin: 0;
}

@media (max-width: 373px) {
  #toolbar ul {
    padding-right: 12px;
  }
}

#toolbar ul li {
  padding: 10px 10px 0 10px;
}

#toolbar ul li a {
  text-decoration: none;
  line-height: 1;
  color: inherit;
  font-size: 13px;
  padding-bottom: 8px;
  letter-spacing: 0.5px;
  cursor: pointer;
}

#toolbar ul li a:hover {
  border-bottom: 2px solid #484848;
  padding-bottom: 6px;
}
</style>
