<script setup lang="ts">
import { Button, Hr, Html, Text } from '@vue-email/components'

defineProps<{
    name: string,
    content: string
}>()
</script>

<template>
    <Html lang="en">
    <Text>{{ name }}</Text>
    <Hr />
    <Text>{{ content }}</Text>
    <Button href="https://vizer.tech">Continuar a VIZER</Button>

    </Html>
</template>