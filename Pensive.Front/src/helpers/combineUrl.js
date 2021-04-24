function combineUrl(parts) {
  const partsWithSlash = parts.map((part) => {
    if (typeof part !== 'string') {
      throw Error('Wrong type');
    }

    return part.trim().replaceAll(/(^\/|\/$)/g, '');
  });

  return partsWithSlash.join('/');
}

export default combineUrl;
