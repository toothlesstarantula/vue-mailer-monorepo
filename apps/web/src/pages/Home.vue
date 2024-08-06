<script setup lang="ts">
import { ref } from 'vue';
import HelloEmail from '../templates/Hello.vue';
import { render } from '@vue-email/render';

const name = ref<string>();
const asunto = ref<string>();
const email = ref<string>();
const content = ref<string>();

const send = async () => {
    if (!name.value || !content.value || !email.value || !asunto.value) {
        throw new Error('name and content are required');
    }

    const template = await render(HelloEmail, {
        name: name.value,
        content: content.value,
    }, {
        pretty: true,
    });

    let raw = await fetch('http://localhost:3000/mailer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: email.value,
            subject: asunto.value,
            template: template
        })
    });

    let res = await raw.json();
    console.log('response', res);

}
</script>

<template>
    <div class="app">
        <input type="text" v-model="name" placeholder="nombre">
        <input type="email" v-model="email" placeholder="Correo a donde enviar">
        <input type="Asunto" v-model="asunto" placeholder="escriba el asunto del correo">
        <textarea placeholder="contenido" v-model="content"></textarea>
        <button @click="send">Enviar</button>
    </div>
</template>

<style>
.app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
</style>