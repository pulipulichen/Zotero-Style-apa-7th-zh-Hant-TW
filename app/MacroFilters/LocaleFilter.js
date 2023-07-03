module.exports = function (macro) {
  return macro.split(`<if locale="[ZH_LOCALE]" match="any">`)
    .join(`<if locale="zh jp chi 中文 繁體中文 簡體中文" match="any">`)
}