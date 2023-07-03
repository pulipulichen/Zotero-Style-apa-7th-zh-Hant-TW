module.exports = {
  data: function () {
    return {
      filename: `test`,
    }
  },
  computed: {
    saveDisabled () {
      return (this.filename.length < 3)
    },
    filenameTrim() {
      return this.filename.trim()
    },
    filecontent () {
      if (this.saveDisabled) {
        return ''
      }

      let f = this.filenameTrim
      return `  <macro name="${f}">
    <choose>
      <if locale="zh jp 中文" match="any">
        <text macro="${f}-zh" />
      </if>
      <else>
        <text macro="${f}-en" />
      </else>
    </choose>
  </macro>`
    }
  },
  methods: {
    save () {
      this.saveFile(this.filenameTrim + '.xml', this.filecontent)
    },
    saveFile(filename, content) {
      const file = new File([content], filename, { type: "text/plain;charset=utf-8" });
      saveAs(file);
    },
    copyFilecontent () {
      this.copyToClipboard(this.filecontent)
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    }
  }
}