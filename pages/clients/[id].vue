<template>
    <div>
        product detail for {{ id }}
    </div>
</template>

<script setup>
    const {id} = useRoute().params
</script>

<style lang="scss" scoped>

</style>