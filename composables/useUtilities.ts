import  { nouns, adjectives } from '@/data/name-generator.json'
export const useUtilities = () => {
    /**
     * Capitalizes the first letter of each word in a string
     * @param str - string to capitalize
     */
    const capitalize = (str: string): string => {
        const words = str.split(' ')
        const capitalizedWords = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1),
        )
        return capitalizedWords.join(' ')
    }

    function formatCurrency(number: number, currency: 'USD' = 'USD'): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            currencyDisplay: 'symbol',
        }).format(number)
    }



    const generateRandomString = (length: number = 5, prefix: string = '::', suffix: string = '::'): string => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let str = prefix

        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        return str + suffix
    }

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          // @ts-ignore
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

      function generateName() {
        return `${capitalize(adjectives[Math.floor(Math.random() * adjectives.length)])} ${capitalize(nouns[Math.floor(Math.random() * nouns.length)])}`
      }

      function randomWord() {
        return nouns[Math.floor(Math.random() * nouns.length)]
      }


    return {
        capitalize,
        formatCurrency,
        generateRandomString,
        generateName,
        debounce,
        randomWord
    }
}
