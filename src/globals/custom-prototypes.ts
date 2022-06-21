(HTMLElement.prototype as any).customStyle = function (style: Object) {
  Object.entries(style).forEach(([key, value]) => this.style[key] = value)
  return this
}
