---
title: '使用 Renovate CI 自動化升級依賴'
date: '2025-06-24'
description: '介紹如何利用 Renovate CI 工具，自動化專案依賴套件的升級流程。'
draft: true
---

# 使用 Renovate CI 自動化升級依賴

在現代軟體開發中，持續保持依賴套件的最新狀態是確保安全與穩定的關鍵。手動升級不僅費時，也容易遺漏。Renovate CI 是一個開源工具，可以自動為你的專案建立升級 PR，大幅簡化這個流程。

## 安裝與設定

1. **安裝 Renovate Bot**

   - 前往 [Renovate 官網](https://www.mend.io/free-developer-tools/renovate/) 或 [GitHub Marketplace](https://github.com/apps/renovate) 安裝到你的 repository。

2. **建立設定檔**
   - 在專案根目錄新增 `renovate.json`：

```json
{
  "extends": ["config:base"],
  "schedule": ["after 10pm every weekday", "before 5am every weekday"]
}
```

- `extends` 可選擇預設規則，`schedule` 可設定升級時段。

## 主要功能

- 自動偵測依賴更新，建立 Pull Request。
- 支援多種語言與 package manager（如 npm、yarn、pip 等）。
- 可自訂升級頻率、分組、標籤與自動合併。

## 進階應用

- **自動合併**：

```json
{
  "automerge": true
}
```

- **指定 package 升級規則**：

```json
{
  "packageRules": [
    {
      "matchPackageNames": ["react", "next"],
      "groupName": "core-upgrades"
    }
  ]
}
```

## 常見問題

- PR 太多怎麼辦？可調整 `prHourlyLimit`、`prConcurrentLimit`。
- 需要審查再合併？可設定 `automergeType` 或使用 branch protection。

## 結語

透過 Renovate CI，你可以輕鬆自動化依賴升級，減少技術債，提高專案安全性與維護效率。

更多資訊請參考 [Renovate 官方文件](https://docs.renovatebot.com/)。
