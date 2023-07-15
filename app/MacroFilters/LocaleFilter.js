module.exports = function (macro) {
  return macro.split(`<if locale="[ZH_LOCALE]" match="any">`)
    .join(`<if locale="zh chi Chinese 中文 繁體中文 簡體中文 up Jon 日文 日本 ko kor 韓國 韓文" match="any">`)
}