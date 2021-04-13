function getPlaceHolderText(text) {
  const defaultPlaceholder = text
    .split('')
    .filter((s) => s === s.toUpperCase())
    .join('');

  if (defaultPlaceholder !== '') {
    return defaultPlaceholder.slice(0, 4);
  }

  return text.slice(0, 4);
}

export default getPlaceHolderText;
