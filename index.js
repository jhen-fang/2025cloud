const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    summary: "🌞 今日充滿正能量，適合開始新計畫！",
    love: "💖 愛情有突破，勇敢表達內心。",
    work: "💼 工作表現佳，有升職機會。",
    money: "💸 財運不錯，可小試投資運氣。",
    color: "金色",
    tip: "早上喝杯黑咖啡，思緒更清晰。",
  },
  {
    summary: "🌥️ 小心突發狀況，保持彈性應對。",
    love: "💖 與伴侶容易有誤會，別太衝動。",
    work: "💼 注意細節，小錯可能釀成大禍。",
    money: "💸 不宜購物，避免衝動消費。",
    color: "灰藍色",
    tip: "出門前多檢查一次重要物品。",
  },
  {
    summary: "🌈 貴人運強，適合主動交際。",
    love: "💖 有人悄悄注意你，展現自信吧！",
    work: "💼 團隊合作順利，進展快速。",
    money: "💸 可望收到意外之財。",
    color: "桃紅色",
    tip: "多微笑，吸引好運和人緣。",
  },
  {
    summary: "🌧️ 情緒低落，建議休息充電。",
    love: "💖 不宜約會，容易心情不合。",
    work: "💼 保守應對較佳，避免爭辯。",
    money: "💸 財務穩定但無新收穫。",
    color: "深綠色",
    tip: "聽音樂或冥想，有助情緒穩定。",
  },
  {
    summary: "⚡ 靈感爆棚，適合創意工作！",
    love: "💖 單身者可能遇到新對象。",
    work: "💼 應變能力強，能迅速解決問題。",
    money: "💸 適合做預算規劃。",
    color: "紫色",
    tip: "記下突發點子，可能成為未來亮點。",
  },
  {
    summary: "💫 順勢而為，一切自然會安排妥當。",
    love: "💖 適合安靜陪伴，給彼此空間。",
    work: "💼 表現中規中矩，避免冒險。",
    money: "💸 省錢是今天的主題。",
    color: "米白色",
    tip: "整理環境，會有好心情。",
  },
  {
    summary: "🔥 幹勁十足，是行動派的一天！",
    love: "💖 遇到喜歡的人，別錯過主動出擊的機會！",
    work: "💼 適合處理難題，突破限制。",
    money: "💸 財運偏旺，可能收到紅包或回饋。",
    color: "亮橘色",
    tip: "挑戰新事物會有意想不到的收穫。",
  },
];

app.get("/", (req, res) => {
  const fortune = data[Math.floor(Math.random() * data.length)];
  res.json({
    zodiac: "♈ 牡羊座 Aries",
    ...fortune,
  });
});

app.listen(port, () => {
  console.log(`♈ Aries Horoscope API is running at http://localhost:${port}`);
  console.log("🎉 新版本：自動建置測試中！");
});
