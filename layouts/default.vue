<template>
        <main class="text-content flex flex-col h-dvh bg-bkg px-2 md:px-0">
                <Header />
                <div class="flex flex-col h-full overflow-hidden mx-auto md:mt-4 md:space-y-4 md:px-4 xs:px-8 sm:px-10 lg:px-16 md:py-4 md:w-4/5 w-full">
                        <slot />
                </div>
                <Footer />
        </main>
</template>