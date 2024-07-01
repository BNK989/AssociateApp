import type { Word } from "~/types/word"

export function checkWin(messages: Word[]) {
    console.log('checking')
    const totalMsgs = messages.length -1
    const totalResolved = messages.reduce(
        (acc, w) => (w.isResolved ? acc += 1 : acc),0
    )
    console.log('totalMsgs:', totalMsgs)
    console.log('totalResolved:', totalResolved)
    return totalMsgs === totalResolved
}

export function test(){
    console.log('test')
    return 'test'
}

