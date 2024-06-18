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



    const generateRandomString = (length: number = 5): string => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let str = '::'

        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        return str + '::'
    }

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          // @ts-ignore
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }


    return {
        capitalize,
        formatCurrency,
        generateRandomString,
        debounce,
    }
}
