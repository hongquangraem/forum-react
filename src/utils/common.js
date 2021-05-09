export const limitText = (text, maxLength) => {
  let standardizedText = text
  if (text.length > maxLength) {
    const splittedText = text.split(' ')
    standardizedText = `${splittedText.slice(0, maxLength).join(' ')}...`
  }

  return standardizedText
}
