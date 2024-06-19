<template>
    <NuxtImg v-if="user?.avatar" :class="`w-10 h-10 rounded-full ${errLoadingImg ? 'hidden' : ''}`" :src="user?.avatar" alt="Rounded avatar"  @error="handleErr"/>
    <!-- <span v-if="errLoadingImg"><SvgPlaceHolder/></span> -->
    <!-- <span v-if="errLoadingImg">{{user?.full_name}}</span> -->
    <h6>Hi, {{ fName }}</h6>
    <!-- <pre>6{{ user }}</pre> -->
</template>

<script lang="ts" setup>
const props = defineProps({
    user: Object
})
const errLoadingImg= ref(false)

const handleErr = () => {
    errLoadingImg.value = true
}

const fName = computed (() => props.user?.userName.split(' ')[0] || props.user?.email?.split('@')[0])

//placeholder placeholder-class="hidden"
</script>