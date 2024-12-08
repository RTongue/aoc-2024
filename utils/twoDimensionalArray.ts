export function twoDimensionalArray(input: string, rowDelimeter, cellDelimiter) {
    return input.split(rowDelimeter)
            .filter(row => row.trim() !== '')
            .map(row => row.split(cellDelimiter))
}