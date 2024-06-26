<template>        
    <footer class="w-full p-1 md:p-8 lg:p-2 ">
      <div class="mx-auto max-w-screen-xl text-center">
          <span class="text-sm sm:text-center">© 2021-{{new Date().getFullYear()}} <a href="#" class="hover:underline">BNK™</a>.  All Rights Reserved.</span>
      </div>
      <!-- <Toast/> -->
    </footer>
    </template>

<script setup>
const store = useStore()
// const fireToast = () => {
//     store.setToast({msg: 'Hello World', type: 'info', duration: 6000})
// }
</script>
