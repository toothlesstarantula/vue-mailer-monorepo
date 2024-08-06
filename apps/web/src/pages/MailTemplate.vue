<script lang="ts" setup>
import { ref } from 'vue';
import HomeMailTemplate from '../templates/Hello.vue';

const homeMailData = ref({
    name: 'Yannick Napsuciale',
    content: 'kjahdfkjadhfkajshdf'
});
</script>

<template>
    <HomeMailTemplate :content="homeMailData.content" :name="homeMailData.name" />
</template>