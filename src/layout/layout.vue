<script lang="ts" setup>
import SideMenu from './components/SideMenu.vue';
import Header from '@/layout/components/Header.vue';
import Footer from './components/Footer.vue';

import config from '@/config';

</script>

<template name="Layout">
    <div class="flex">
        <div class="h-100vh">
            <div
                class="h-56px text-center text-xl box-border font-600 flex items-center justify-center bg-secondary"
                style="color: #FFF;"
            >
                {{ config.appName }}
            </div>
            <SideMenu class="h-[calc(100vh-56px)] bg-primary" />
        </div>
        <div style="background-color: #f3f3f3;">
            <Header />
            <div class="h-[calc(100vh-112px)] p-5">
                <router-view />
            </div>
            <Footer />
        </div>
    </div>
</template>