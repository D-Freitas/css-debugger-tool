(HTMLElement.prototype as any).customStyle = function (style: Object) {
  // eslint-disable-next-line no-return-assign
  Object.entries(style).forEach(([key, value]) => this.style[key] = value)
  return this
}
