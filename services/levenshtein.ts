import { distance } from 'fastest-levenshtein'

export const levTest = (word: string, guess: string): boolean => {

    const dist = distance(word, guess)
    const halfLen = Math.floor(word.length / word.length > 9 ? 3 : 2) || 1
    
    return dist < halfLen
    
} 
