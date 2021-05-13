function combineUrl(parts: Array<string>): string {
  const partsWithSlash = parts.map((part) =>
    part.trim().replaceAll(/(^\/|\/$)/g, '')
  );

  return partsWithSlash.join('/');
}

export default combineUrl;
