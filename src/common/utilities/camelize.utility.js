export const camelize = (textToCamelize) => {
    return textToCamelize.replace(textToCamelize[0], textToCamelize[0].toUpperCase())
}