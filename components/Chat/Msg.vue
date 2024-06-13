<!-- <template>
    <div v-if="i === nextWordIdx && gameMode === 'guess'" id="lastGuess">
        <SvgArrowRight />
    </div>
    <SvgCheckMark v-if="w.guess" />
    <p
        v-if="i < words!.length - 1"
        class="px-3 py-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap"
        :class="i === nextWordIdx ? 'font-bold' : ''">
        {{ w.guess ? w.word : w.cipher }}
    </p>
    <p v-else class="px-3 py-2 bg-blue-300 bg-opacity-10 w-min">
        {{ w.word }}
    </p>
</template>

<script lang="ts" setup>
const props = defineProps({
    
})
</script> -->
