<template>
        <main class="text-gray-950 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 flex flex-col h-dvh">
                <Header />
                <div class="flex flex-col h-full overflow-hidden mx-auto md:mt-4 md:space-y-4 md:px-4 xs:px-8 sm:px-10 lg:px-16 md:py-4 md:w-4/5 w-full">
                        <slot />
                </div>
                <Footer />
        </main>
</template>