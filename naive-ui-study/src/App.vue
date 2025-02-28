<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import NaiveUiDemo from './components/NaiveUiDemo.vue'
import MenusDemo from './components/MenusDemo.vue';

import { NConfigProvider, NInput, NDatePicker, NSpace } from 'naive-ui'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      
    </div>
  </header>

  <main>
    <MenusDemo />
    
    <!-- naive-ui 按钮-->
    <n-space>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>

  </n-space>

  <n-divider />
  
  <n-loading-bar-provider>
  <n-message-provider>
    <n-notification-provider>
      <n-modal-provider>
        <n-dialog-provider>
          <NaiveUiDemo/>
        </n-dialog-provider>
      </n-modal-provider>
    </n-notification-provider>
  </n-message-provider>
</n-loading-bar-provider>
  
  
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
