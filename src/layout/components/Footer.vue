<template>
    <div
        class="h-56px text-l font-400 text-center text-gray-400"
        style="line-height: 56px;"
    >
        {{ config.footer }}
    </div>
</template>
<script lang="ts">
export default {
    name: 'Footer'
};
</script>
<script lang="ts" setup>
import config from '@/config';
</script>