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

    return {
        capitalize,
        formatCurrency,
    }
}
