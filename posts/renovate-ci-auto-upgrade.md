---
title: '個人開發者的 Renovate CI 自動升級實戰經驗'
date: '2025-06-24'
description: '從個人開發者的角度分享如何使用 Renovate CI 自動化依賴套件升級，包含實際配置、權限設定和使用心得。'
tags: ['CI/CD', 'automation', 'tools', 'GitHub']
draft: false
---

在維護個人專案時，依賴套件的版本管理常常被忽略。手動檢查和升級套件不僅繁瑣，還容易錯過重要的安全更新。本文將分享我在個人專案中使用 Renovate CI 的經驗，這個強大的自動化工具如何幫助我節省時間，同時保持專案的依賴始終處於最新狀態。

## 為什麼選擇 Renovate CI？

在嘗試 Renovate CI 之前，我經常面臨這些問題：
- 手動檢查多個專案的依賴更新非常耗時
- 容易忽略安全性更新
- 不確定升級會不會造成破壞性改變

Renovate CI 完美解決了這些問題：它會自動檢查依賴，建立獨立的更新 PR，並且可以配置自動化測試，確保更新不會破壞現有功能。

## 實戰配置教學

### 1. 設定 GitHub Token

首先，你需要設定正確的 Token。我建議使用 Personal Access Token (PAT) Classic，原因是：
- Fine-grained token 目前對 Renovate 的支援還不夠完整
- 不需要額外安裝 GitHub App
- 設定簡單直接

建立 PAT Classic 步驟：
1. 前往 GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. 生成新的 token，確保勾選 `repo` 權限
3. 將 token 儲存在專案的 GitHub Secrets 中，名稱設為 `RENOVATE_TOKEN`

### 2. 設定 GitHub Actions

在 `.github/workflows/renovate.yml` 建立以下配置：

```yaml
name: Renovate

on:
  schedule:
    - cron: '*/15 * * * *'  # 每15分鐘執行一次
  push:
    branches: [main]

jobs:
  renovate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: renovatebot/github-action@v43.0.0
        with:
          token: ${{ secrets.RENOVATE_TOKEN }}
          configurationFile: .github/renovate.json
```

### 3. Renovate 配置文件

在專案根目錄建立 `.github/renovate.json`：

```json
{
  "extends": ["config:base"],
  "schedule": ["after 10pm every weekday", "before 5am every weekday"],
  "packageRules": [
    {
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true
    }
  ]
}
```

這個配置的特點：
- 使用基礎預設配置
- 設定在非工作時段執行更新
- 自動合併小版本和修補程式更新

## 實際使用體驗

### Onboarding PR

當你首次設定完成後，Renovate 會自動建立一個 Onboarding PR。這是一個重要的步驟：
- 確認你的配置是否正確
- 預覽將會更新的依賴
- 可以調整配置參數

建議仔細閱讀這個 PR 的內容，確認無誤後才合併。

### 更新流程體驗

合併 Onboarding PR 後，Renovate 會開始運作：
1. 自動掃描專案依賴
2. 為每個需要更新的套件建立獨立的 PR
3. PR 中會包含：
   - 更新日誌（如果有）
   - 相容性資訊
   - 自動測試結果

### 自動化程度

根據我的配置，Renovate 會：
- 自動處理小版本和修補程式更新
- 主版本更新需要手動審查
- 在非工作時間執行更新，避免影響開發

## 實用技巧與建議

### 1. 合理的更新策略

我的建議是：
- 小版本和修補程式可以設定自動合併
- 主版本更新一定要手動審查
- 設定在非工作時段執行，避免干擾

### 2. 注意事項

使用過程中的一些心得：
- Token 權限要設定得當，但不要過度開放
- 定期檢查 Renovate 的運行狀況
- 不要忽視主版本更新的 PR，它們可能包含重要改動

### 3. 企業環境的考量

雖然在個人專案中運作良好，但在企業環境中可能需要：
- 更嚴格的權限控制
- 更完整的測試流程
- 可能需要使用 GitHub App 而非 PAT

## 結語

Renovate CI 大幅簡化了我的套件管理流程。對於個人開發者來說，它提供了：
- 自動化的依賴更新
- 清晰的更新資訊
- 彈性的配置選項

雖然設定過程需要一些時間，但長期來看絕對值得投資。它不僅節省了大量手動檢查和更新的時間，更重要的是確保了專案的安全性和穩定性。
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
