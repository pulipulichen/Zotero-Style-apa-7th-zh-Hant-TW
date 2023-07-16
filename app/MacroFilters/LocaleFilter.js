module.exports = function (macro) {
  return macro.split(`<if locale="[ZH_LOCALE]" match="any">`)
    .join(`<if locale="zh chi Chinese 中文 正體中文 繁體中文 簡體中文 简体中文 jp jpn 日文 日本 ko kor 韓國 韓文" match="any">`)
}