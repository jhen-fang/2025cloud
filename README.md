# Aries Horoscope API ♈

🔮 每次啟動都會回傳牡羊座的一組運勢，包括愛情、工作、財運與小建議！

> 這是一個以 Node.js 建立的輕量級 API，使用 Docker 容器化包裝，每次訪問 `http://localhost:3000` 時，會隨機回傳一組 **牡羊座今日運勢建議**


## 使用 Docker 建立與執行

### Step 1：Build Docker Image

```bash
docker build -t jhenfang/2025cloud:aries-v1 .
```

### Step 2：執行 Container

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

### Step 2：Push Image 至公開倉庫
```bash
docker tag jhenfang/2025cloud:aries-v1 jhenfang/2025cloud:0.0.1
docker push jhenfang/2025cloud:0.0.1
```
