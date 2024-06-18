<template>
    <main class="flex flex-col min-h-dvh">
        <!-- <NavBar /> -->
        <div class="flex-1 mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <slot />
        </div>
        <MyFooter />
    </main>
</template>