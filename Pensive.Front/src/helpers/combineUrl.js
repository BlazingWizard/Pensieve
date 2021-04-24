function combineUrl(parts) {
  const partsWithSlash = parts.map((part) =>
    String(part)
      .trim()
      .replaceAll(/(^\/|\/$)/g, '')
  );

  return partsWithSlash.join('/');
}

export default combineUrl;
