<script lang="ts" setup>
import SideMenu from './components/SideMenu.vue';
import Header from '@/layout/components/Header.vue';

</script>

<template name="Layout">
    <div class="flex">
        <div class="h-100vh">
            <div class="h-64px text-center text-xl box-border font-600 flex items-center justify-center bg-secondary">Acme</div>
            <SideMenu class="h-[calc(100vh-64px)] bg-primary" />
        </div>
        <div>
            <Header />
        </div>
    </div>
</template>