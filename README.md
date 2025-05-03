# Aries Horoscope API ♈

🔮 每次啟動都會回傳牡羊座的一組運勢，包括愛情、工作、財運與小建議！

> 這是一個以 Node.js 建立的輕量級 API，使用 Docker 容器化包裝，每次訪問 `http://localhost:3000` 時，會隨機回傳一組 **牡羊座今日運勢建議**


## 使用 Docker 建立與執行

### Step 1：Build Docker Image:讓使用者知道如何從本地 Dockerfile 建立 Image

```bash
docker build -t jhenfang/2025cloud:aries-v1 .
```

### Step 2：執行 Container:讓使用者知道在本地端建立 Image 後，如何執行 Container

```bash
docker run -p 3000:3000 jhenfang/2025cloud:aries-v1
```
打開瀏覽器或 curl 造訪： http://localhost:3000

#### 範例輸出 (JSON)
```JSON
{
  "zodiac": "♈ 牡羊座 Aries",
  "summary": "🌞 今日充滿正能量，適合開始新計畫！",
  "love": "💖 愛情有突破，勇敢表達內心。",
  "work": "💼 工作表現佳，有升職機會。",
  "money": "💸 財運不錯，可小試投資運氣。",
  "color": "金色",
  "tip": "早上喝杯黑咖啡，思緒更清晰。"
}
```
## 將 Image 上傳至 Docker Hub

### Step 1：登入 Docker Hub
```bash
docker login
```

### Step 2：Push Image 至公開倉庫: 讓使用者知道如何將 Image 上傳至 Docker Hub
這裡第一次推送手動將本地端 build 好的 image 設定 tag 0.0.1
```bash
docker tag jhenfang/2025cloud:aries-v1 jhenfang/2025cloud:0.0.1
docker push jhenfang/2025cloud:0.0.1
```

### Step 3：從 Docker Hub 拉取 Image:讓使用者知道如何從 Docker Hub 下載 Image
這裡補充如何從 Docker Hub 拉取 Image，這裡拉的版本是前面上傳的 0.0.1
```bash
docker pull jhenfang/2025cloud:0.0.1
```
如果要拉取最新的版本，可以使用 latest tag
```bash
docker pull jhenfang/2025cloud:latest
```
如果要在本地端 run 最新的版本，可以使用 latest tag
```bash
docker run -p 3000:3000 jhenfang/2025cloud:latest
```

## 自動化產生 Container Image 的邏輯
本專案使用 GitHub Actions 自動化建置與推送 Docker 映像檔，流程如下：
1. 當 main 分支有 Push 或 PR 發生時，GitHub Actions 會自動觸發 workflow。
2. 根據事件類型（push 或 pull_request），執行行為有所不同：
- Push 到 main 分支時：
  -  拉取最新的專案程式碼（checkout）
  -  使用 Dockerfile 建立 Container Image（docker/build-push-action）
  -  將 Image 推送至 Docker Hub，Tag 為 jhenfang/2025cloud:latest
  -  使用者可從 Docker Hub 直接拉取此最新版 Image
- PR 對 main 分支時：
   -  同樣會拉取程式碼並 build Image
   -  不會進行 Docker Hub 登入或推送
   -  目的是確認 Dockerfile 是否有效、建置流程是否成功，達成自動驗證目的


## Tag 策略
- 自動推送：CI/CD 流程會自動產生 latest Tag，代表 main 的最新狀態
- 手動版本控制：初始版本有用手動推送 0.0.1，可用於回溯測試或版本控制
- 版本號碼：未來擴充可使用語意化版本控制來管理版本號碼，例如：0.0.1、0.0.2 等