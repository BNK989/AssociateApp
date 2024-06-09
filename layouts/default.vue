<template>
        <main class="dark:bg-gray-900 dark:text-gray-50 flex flex-col min-h-dvh">
                <Header />
                <div class="flex-1 mx-auto mt-4 space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-4/5">
                        <slot />
                </div>
                <Footer />
        </main>
</template>