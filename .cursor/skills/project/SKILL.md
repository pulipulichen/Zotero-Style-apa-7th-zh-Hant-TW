---
name: project
description: 記錄本專案的開發與發佈流程。Use when working on this Zotero CSL project, especially when editing files in src or preparing a build release.
---

# Project Workflow

## 開發方式

1. 這是給 Zotero 使用的 CSL 工具。
2. 日常開發時，不直接維護單一巨大 CSL 檔案。
3. 將 CSL 內容拆成多個小檔案，放在 `src` 目錄中（例如 `src/info.xml`、`src/citation.xml`、`src/bibliography.xml`）。

## 發佈與編譯

1. 發佈前確認 `src` 的拆分內容已更新完成。
2. 在專案根目錄執行以下指令進行編譯：

```bash
sudo docker compose up
```

3. 編譯輸出會產生到 `dist` 目錄，作為發佈用 CSL 產物。
