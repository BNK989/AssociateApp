<template>
    <main class="flex min-h-dvh flex-col">
        <!-- <NavBar /> -->
        <div
            class="xs:px-8 mx-auto mt-4 w-3/5 max-w-7xl flex-1 space-y-4 px-4 pb-16 sm:px-10 lg:px-16">
            <slot />
        </div>
        <MyFooter />
    </main>
</template>
