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
    },
    filecontentTemplate () {
      if (this.saveDisabled) {
        return ''
      }

      let f = this.filenameTrim
      return `  <macro name="${f}">
    
  </macro>`
    },
    filecontentEnTemplate () {
      if (this.saveDisabled) {
        return ''
      }

      let f = this.filenameTrim
      return `  <macro name="${f}-en">
    
  </macro>`
    },
    textMacro () {
      if (this.saveDisabled) {
        return ''
      }

      let f = this.filenameTrim
      return `<text macro="${f}" />`
    }
  },
  methods: {
    save () {
      this.saveFile(this.filenameTrim + '.xml', this.filecontent)
    },
    saveTemplate () {
      this.saveFile(this.filenameTrim + '.xml', this.filecontentTemplate)
    },
    saveEnTemplate () {
      this.saveFile(this.filenameTrim + '-en.xml', this.filecontentEnTemplate)
    },
    saveFile(filename, content) {
      const file = new File([content], filename, { type: "text/plain;charset=utf-8" });
      saveAs(file);
    },
    copyFilecontent () {
      this.copyToClipboard(this.filecontent)
    },
    copyTextMacro () {
      this.copyToClipboard(this.textMacro)
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