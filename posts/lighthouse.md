---
title: 'Lighthouse 設定紀錄'
date: '2025-07-21'
description: '個人對於 lighthouse 的了解以及應用'
tags: ['CI/CD', 'automation', 'tools', 'lighthouse']
draft: false
---

## 遇到的困難

BFCache

- 沒有讓頁面可以 back/forward：Ensure the page can be restored from the back/forward cache，導致測試出來成績 0 分
- 有很多原因會造成 bfcache，像是 unload 事件、websocket？（vite 的開發模式那種 HMR 是否也會？）
