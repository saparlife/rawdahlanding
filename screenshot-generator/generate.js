const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Screen sizes with custom scale factors
const SIZES = {
  iphone: { width: 1242, height: 2688, name: 'iphone', scale: 1.0 },
  ipad: { width: 2064, height: 2752, name: 'ipad', scale: 1.2 }
};

// Feature graphic size for Google Play
const FEATURE_GRAPHIC_SIZE = { width: 1024, height: 500 };

// Translations
const translations = {
  ru: {
    screen1: {
      badge: 'БЕСПЛАТНО',
      title: 'Изучайте',
      titleHighlight: '99 имён',
      titleEnd: 'Аллаха',
      subtitle: 'Красивое приложение с аудио произношением, тестами и геймификацией'
    },
    screen2: {
      label: 'ИЗУЧЕНИЕ',
      title: '99 имён по темам',
      formula: '11 тем × 9 имён = 99 имён',
      names: [
        { arabic: 'الرَّحْمَنُ', trans: 'Ар-Рахман', meaning: 'Милостивый' },
        { arabic: 'الرَّحِيمُ', trans: 'Ар-Рахим', meaning: 'Милосердный' },
        { arabic: 'المَلِكُ', trans: 'Аль-Малик', meaning: 'Царь' }
      ],
      progress: '34/99'
    },
    screen3: {
      label: 'ТЕСТЫ',
      title: 'Проверьте знания',
      question: 'Вопрос 5 из 10',
      arabicName: 'الرَّحْمَنُ',
      prompt: 'Что означает это имя?',
      options: ['Всемогущий', 'Милостивый', 'Всеведущий', 'Царь'],
      correctIndex: 1
    },
    screen4: {
      label: 'ГЕЙМИФИКАЦИЯ',
      title: 'Мотивация',
      xp: '1,250',
      xpLabel: 'Очки XP',
      streak: '7',
      streakLabel: 'Дней подряд',
      achievementsTitle: 'Достижения',
      achievements: ['Первые шаги', 'Ученик', 'Отличник', 'Чемпион', 'Усердный', 'В огне', 'Мастер', 'Легенда'],
      level: 'Уровень 5',
      levelXp: '650 / 1000 XP'
    },
    screen5: {
      label: 'УДОБСТВО',
      title: 'Тёмная и светлая темы',
      subtitle: 'Выберите комфортный режим',
      darkLabel: 'Тёмная',
      lightLabel: 'Светлая',
      features: ['4 языка: 🇰🇿 🇷🇺 🇬🇧 🇹🇷', 'Работает офлайн', 'Аудио произношение']
    },
    featureGraphic: {
      title: '99 имён Аллаха',
      subtitle: 'Изучайте с аудио, тестами и геймификацией'
    }
  },
  en: {
    screen1: {
      badge: 'FREE',
      title: 'Learn the',
      titleHighlight: '99 Names',
      titleEnd: 'of Allah',
      subtitle: 'Beautiful app with audio pronunciation, quizzes, and gamification'
    },
    screen2: {
      label: 'LEARNING',
      title: '99 Names by Topics',
      formula: '11 Topics × 9 Names = 99 Names',
      names: [
        { arabic: 'الرَّحْمَنُ', trans: 'Ar-Rahman', meaning: 'The Most Gracious' },
        { arabic: 'الرَّحِيمُ', trans: 'Ar-Raheem', meaning: 'The Most Merciful' },
        { arabic: 'المَلِكُ', trans: 'Al-Malik', meaning: 'The King' }
      ],
      progress: '34/99'
    },
    screen3: {
      label: 'QUIZZES',
      title: 'Test Your Knowledge',
      question: 'Question 5 of 10',
      arabicName: 'الرَّحْمَنُ',
      prompt: 'What does this name mean?',
      options: ['The Almighty', 'The Most Gracious', 'The All-Knowing', 'The King'],
      correctIndex: 1
    },
    screen4: {
      label: 'GAMIFICATION',
      title: 'Stay Motivated',
      xp: '1,250',
      xpLabel: 'XP Points',
      streak: '7',
      streakLabel: 'Day Streak',
      achievementsTitle: 'Achievements',
      achievements: ['First Steps', 'Scholar', 'Perfect', 'Champion', 'Dedicated', 'On Fire', 'Master', 'Legend'],
      level: 'Level 5',
      levelXp: '650 / 1000 XP'
    },
    screen5: {
      label: 'COMFORT',
      title: 'Dark & Light Themes',
      subtitle: 'Choose your comfortable mode',
      darkLabel: 'Dark',
      lightLabel: 'Light',
      features: ['4 Languages: 🇰🇿 🇷🇺 🇬🇧 🇹🇷', 'Works Offline', 'Audio Pronunciation']
    },
    featureGraphic: {
      title: '99 Names of Allah',
      subtitle: 'Learn with audio, quizzes and gamification'
    }
  }
};

// Generate HTML for each screen
function generateScreen1HTML(t, size) {
  const scale = size.scale;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #134e4a 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: ${140 * scale}px;
    }
    .app-icon {
      width: ${360 * scale}px;
      height: ${360 * scale}px;
      border-radius: ${90 * scale}px;
      margin-bottom: ${110 * scale}px;
      box-shadow: 0 ${70 * scale}px ${140 * scale}px rgba(16, 185, 129, 0.4);
      overflow: hidden;
      border: ${12 * scale}px solid rgba(255,255,255,0.3);
    }
    .app-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .badge {
      font-size: ${44 * scale}px;
      color: #10b981;
      font-weight: 600;
      letter-spacing: ${8 * scale}px;
      margin-bottom: ${70 * scale}px;
    }
    .title {
      font-size: ${150 * scale}px;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: ${55 * scale}px;
    }
    .highlight {
      background: linear-gradient(90deg, #10b981, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      white-space: nowrap;
    }
    .subtitle {
      font-size: ${58 * scale}px;
      color: #94a3b8;
      line-height: 1.5;
      max-width: ${1000 * scale}px;
    }
    .flags {
      margin-top: ${110 * scale}px;
      display: flex;
      align-items: center;
      gap: ${36 * scale}px;
      font-size: ${90 * scale}px;
    }
  </style>
</head>
<body>
  <div class="app-icon"><img src="LOGO_PLACEHOLDER" alt="Rawdah"></div>
  <div class="badge">${t.badge}</div>
  <h1 class="title">
    ${t.title} <span class="highlight">${t.titleHighlight}</span> ${t.titleEnd}
  </h1>
  <p class="subtitle">${t.subtitle}</p>
  <div class="flags">🇰🇿 🇷🇺 🇬🇧 🇹🇷</div>
</body>
</html>`;
}

function generateScreen2HTML(t, size) {
  const scale = size.scale;
  const namesHTML = t.names.map(n => `
    <div class="name-card">
      <div class="arabic">${n.arabic}</div>
      <div class="trans">${n.trans}</div>
      <div class="meaning">${n.meaning}</div>
      <div class="play-btn">▶</div>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(180deg, #0f172a 0%, #064e3b 100%);
      color: white;
      padding: ${110 * scale}px ${80 * scale}px;
    }
    .header {
      text-align: center;
      margin-bottom: ${80 * scale}px;
    }
    .label {
      font-size: ${40 * scale}px;
      color: #10b981;
      font-weight: 600;
      letter-spacing: ${6 * scale}px;
      margin-bottom: ${35 * scale}px;
    }
    h2 {
      font-size: ${90 * scale}px;
      font-weight: 700;
      margin-bottom: ${25 * scale}px;
    }
    .formula {
      color: #94a3b8;
      font-size: ${46 * scale}px;
    }
    .name-card {
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: ${56 * scale}px;
      padding: ${55 * scale}px;
      margin-bottom: ${40 * scale}px;
      position: relative;
    }
    .arabic {
      font-size: ${100 * scale}px;
      font-weight: 700;
      background: linear-gradient(90deg, #10b981, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${20 * scale}px;
    }
    .trans {
      font-size: ${56 * scale}px;
      font-weight: 600;
      margin-bottom: ${14 * scale}px;
    }
    .meaning {
      font-size: ${46 * scale}px;
      color: #94a3b8;
    }
    .play-btn {
      position: absolute;
      right: ${55 * scale}px;
      top: 50%;
      transform: translateY(-50%);
      width: ${120 * scale}px;
      height: ${120 * scale}px;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${42 * scale}px;
      padding-left: ${8 * scale}px;
    }
    .progress {
      background: rgba(255,255,255,0.1);
      border-radius: ${100 * scale}px;
      padding: ${50 * scale}px ${60 * scale}px;
      display: flex;
      align-items: center;
      gap: ${40 * scale}px;
      margin-top: ${60 * scale}px;
    }
    .bar {
      flex: 1;
      height: ${24 * scale}px;
      background: rgba(255,255,255,0.2);
      border-radius: ${12 * scale}px;
      overflow: hidden;
    }
    .bar-fill {
      height: 100%;
      width: 34%;
      background: linear-gradient(90deg, #10b981, #14b8a6);
      border-radius: ${12 * scale}px;
    }
    .progress-text {
      font-size: ${50 * scale}px;
      font-weight: 600;
      color: #10b981;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="label">${t.label}</div>
    <h2>${t.title}</h2>
    <p class="formula">${t.formula}</p>
  </div>
  ${namesHTML}
  <div class="progress">
    <div class="bar"><div class="bar-fill"></div></div>
    <div class="progress-text">${t.progress}</div>
  </div>
</body>
</html>`;
}

function generateScreen3HTML(t, size) {
  const scale = size.scale;
  const optionsHTML = t.options.map((opt, i) => `
    <div class="option ${i === t.correctIndex ? 'correct' : ''}">
      <div class="letter">${String.fromCharCode(65 + i)}</div>
      <div class="text">${opt}</div>
      ${i === t.correctIndex ? '<div class="check">✓</div>' : ''}
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(180deg, #134e4a 0%, #0f172a 100%);
      color: white;
      padding: ${110 * scale}px ${80 * scale}px;
    }
    .header {
      text-align: center;
      margin-bottom: ${80 * scale}px;
    }
    .label {
      font-size: ${40 * scale}px;
      color: #14b8a6;
      font-weight: 600;
      letter-spacing: ${6 * scale}px;
      margin-bottom: ${35 * scale}px;
    }
    h2 {
      font-size: ${90 * scale}px;
      font-weight: 700;
    }
    .question-box {
      background: rgba(255,255,255,0.08);
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: ${70 * scale}px;
      padding: ${80 * scale}px;
      text-align: center;
      margin-bottom: ${60 * scale}px;
    }
    .number {
      font-size: ${38 * scale}px;
      color: #14b8a6;
      margin-bottom: ${45 * scale}px;
    }
    .arabic-name {
      font-size: ${150 * scale}px;
      font-weight: 700;
      background: linear-gradient(90deg, #10b981, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${40 * scale}px;
    }
    .prompt {
      font-size: ${50 * scale}px;
      color: #94a3b8;
    }
    .option {
      background: rgba(255,255,255,0.05);
      border: 4px solid rgba(255,255,255,0.1);
      border-radius: ${50 * scale}px;
      padding: ${50 * scale}px;
      margin-bottom: ${32 * scale}px;
      display: flex;
      align-items: center;
      gap: ${40 * scale}px;
    }
    .option.correct {
      background: rgba(16, 185, 129, 0.2);
      border-color: #10b981;
    }
    .letter {
      width: ${100 * scale}px;
      height: ${100 * scale}px;
      background: rgba(255,255,255,0.1);
      border-radius: ${28 * scale}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: ${46 * scale}px;
    }
    .option.correct .letter {
      background: #10b981;
    }
    .text {
      font-size: ${52 * scale}px;
      font-weight: 500;
    }
    .check {
      margin-left: auto;
      font-size: ${60 * scale}px;
      color: #10b981;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="label">${t.label}</div>
    <h2>${t.title}</h2>
  </div>
  <div class="question-box">
    <div class="number">${t.question}</div>
    <div class="arabic-name">${t.arabicName}</div>
    <div class="prompt">${t.prompt}</div>
  </div>
  ${optionsHTML}
</body>
</html>`;
}

function generateScreen4HTML(t, size) {
  const scale = size.scale;
  const achievementsHTML = t.achievements.map((a, i) => {
    const icons = ['🎯', '📚', '⭐', '🏆', '💪', '🔥', '👑', '💎'];
    const unlocked = i < 5;
    return `
      <div class="achievement ${unlocked ? 'unlocked' : ''}">
        <div class="icon">${icons[i]}</div>
        <div class="name">${a}</div>
      </div>
    `;
  }).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%);
      color: white;
      padding: ${90 * scale}px ${70 * scale}px;
    }
    .header {
      text-align: center;
      margin-bottom: ${60 * scale}px;
    }
    .label {
      font-size: ${40 * scale}px;
      color: #a78bfa;
      font-weight: 600;
      letter-spacing: ${6 * scale}px;
      margin-bottom: ${35 * scale}px;
    }
    h2 {
      font-size: ${90 * scale}px;
      font-weight: 700;
    }
    .stats-row {
      display: flex;
      gap: ${40 * scale}px;
      margin-bottom: ${55 * scale}px;
    }
    .stat-card {
      flex: 1;
      border-radius: ${56 * scale}px;
      padding: ${55 * scale}px;
      text-align: center;
    }
    .stat-card.xp {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(20, 184, 166, 0.1));
      border: 3px solid rgba(16, 185, 129, 0.3);
    }
    .stat-card.streak {
      background: linear-gradient(135deg, rgba(251, 146, 60, 0.25), rgba(239, 68, 68, 0.1));
      border: 3px solid rgba(251, 146, 60, 0.3);
    }
    .stat-icon {
      font-size: ${90 * scale}px;
      margin-bottom: ${22 * scale}px;
    }
    .stat-value {
      font-size: ${85 * scale}px;
      font-weight: 800;
      margin-bottom: ${14 * scale}px;
    }
    .stat-label {
      font-size: ${38 * scale}px;
      color: #94a3b8;
    }
    .achievements-title {
      font-size: ${55 * scale}px;
      font-weight: 600;
      margin-bottom: ${45 * scale}px;
    }
    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${32 * scale}px;
      margin-bottom: ${55 * scale}px;
    }
    .achievement {
      background: rgba(255,255,255,0.08);
      border: 3px solid rgba(255,255,255,0.1);
      border-radius: ${42 * scale}px;
      padding: ${40 * scale}px;
      text-align: center;
    }
    .achievement.unlocked {
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.1));
      border-color: rgba(251, 191, 36, 0.4);
    }
    .achievement .icon {
      font-size: ${75 * scale}px;
      margin-bottom: ${18 * scale}px;
    }
    .achievement .name {
      font-size: ${30 * scale}px;
      color: #94a3b8;
    }
    .achievement.unlocked .name {
      color: #fbbf24;
    }
    .level-section {
      background: rgba(255,255,255,0.08);
      border: 3px solid rgba(255,255,255,0.1);
      border-radius: ${56 * scale}px;
      padding: ${55 * scale}px;
    }
    .level-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${40 * scale}px;
    }
    .level-badge {
      display: flex;
      align-items: center;
      gap: ${25 * scale}px;
      font-size: ${55 * scale}px;
      font-weight: 700;
    }
    .level-badge .icon {
      font-size: ${68 * scale}px;
    }
    .level-xp {
      color: #10b981;
      font-size: ${44 * scale}px;
      font-weight: 600;
    }
    .level-bar {
      height: ${34 * scale}px;
      background: rgba(255,255,255,0.2);
      border-radius: ${17 * scale}px;
      overflow: hidden;
    }
    .level-bar-fill {
      height: 100%;
      width: 65%;
      background: linear-gradient(90deg, #10b981, #14b8a6);
      border-radius: ${17 * scale}px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="label">${t.label}</div>
    <h2>${t.title}</h2>
  </div>
  <div class="stats-row">
    <div class="stat-card xp">
      <div class="stat-icon">⚡</div>
      <div class="stat-value">${t.xp}</div>
      <div class="stat-label">${t.xpLabel}</div>
    </div>
    <div class="stat-card streak">
      <div class="stat-icon">🔥</div>
      <div class="stat-value">${t.streak}</div>
      <div class="stat-label">${t.streakLabel}</div>
    </div>
  </div>
  <div class="achievements-title">🏆 ${t.achievementsTitle}</div>
  <div class="achievements-grid">${achievementsHTML}</div>
  <div class="level-section">
    <div class="level-header">
      <div class="level-badge">
        <span class="icon">⭐</span>
        <span>${t.level}</span>
      </div>
      <div class="level-xp">${t.levelXp}</div>
    </div>
    <div class="level-bar"><div class="level-bar-fill"></div></div>
  </div>
</body>
</html>`;
}

function generateScreen5HTML(t, size) {
  const scale = size.scale;
  const featuresHTML = t.features.map((f, i) => {
    const icons = ['🌐', '📴', '🔊'];
    return `
      <div class="feature">
        <div class="feature-icon">${icons[i]}</div>
        <div class="feature-text">${f}</div>
      </div>
    `;
  }).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      color: white;
      padding: ${110 * scale}px ${80 * scale}px;
    }
    .header {
      text-align: center;
      margin-bottom: ${80 * scale}px;
    }
    .label {
      font-size: ${40 * scale}px;
      color: #60a5fa;
      font-weight: 600;
      letter-spacing: ${6 * scale}px;
      margin-bottom: ${35 * scale}px;
    }
    h2 {
      font-size: ${90 * scale}px;
      font-weight: 700;
      margin-bottom: ${25 * scale}px;
    }
    .subtitle {
      color: #94a3b8;
      font-size: ${46 * scale}px;
    }
    .themes {
      display: flex;
      gap: ${50 * scale}px;
      margin-bottom: ${70 * scale}px;
    }
    .theme-card {
      flex: 1;
      border-radius: ${70 * scale}px;
      overflow: hidden;
      border: 6px solid transparent;
    }
    .theme-card.active {
      border-color: #10b981;
    }
    .theme-card.dark { background: #0f172a; }
    .theme-card.light { background: #f8fafc; }
    .mini-screen {
      padding: ${50 * scale}px;
      min-height: ${580 * scale}px;
    }
    .mini-header {
      height: ${50 * scale}px;
      border-radius: ${25 * scale}px;
      margin-bottom: ${42 * scale}px;
      width: 60%;
    }
    .dark .mini-header { background: rgba(255,255,255,0.1); }
    .light .mini-header { background: rgba(0,0,0,0.1); }
    .mini-card {
      border-radius: ${42 * scale}px;
      padding: ${42 * scale}px;
      margin-bottom: ${25 * scale}px;
    }
    .dark .mini-card { background: rgba(255,255,255,0.08); }
    .light .mini-card { background: white; box-shadow: 0 6px 25px rgba(0,0,0,0.1); }
    .mini-title {
      height: ${38 * scale}px;
      border-radius: ${19 * scale}px;
      width: 70%;
      margin-bottom: ${20 * scale}px;
      background: linear-gradient(90deg, #10b981, #14b8a6);
    }
    .mini-text {
      height: ${28 * scale}px;
      border-radius: ${14 * scale}px;
      width: 90%;
    }
    .dark .mini-text { background: rgba(255,255,255,0.2); }
    .light .mini-text { background: rgba(0,0,0,0.15); }
    .theme-label {
      text-align: center;
      padding: ${42 * scale}px;
      font-weight: 600;
      font-size: ${46 * scale}px;
    }
    .dark .theme-label { background: rgba(255,255,255,0.05); color: white; }
    .light .theme-label { background: #e2e8f0; color: #1e293b; }
    .features {
      display: flex;
      flex-direction: column;
      gap: ${35 * scale}px;
    }
    .feature {
      display: flex;
      align-items: center;
      gap: ${42 * scale}px;
      background: rgba(255,255,255,0.05);
      border-radius: ${50 * scale}px;
      padding: ${50 * scale}px ${60 * scale}px;
    }
    .feature-icon {
      width: ${130 * scale}px;
      height: ${130 * scale}px;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      border-radius: ${35 * scale}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${62 * scale}px;
    }
    .feature-text {
      font-size: ${50 * scale}px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="label">${t.label}</div>
    <h2>${t.title}</h2>
    <p class="subtitle">${t.subtitle}</p>
  </div>
  <div class="themes">
    <div class="theme-card dark active">
      <div class="mini-screen">
        <div class="mini-header"></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
      </div>
      <div class="theme-label">${t.darkLabel} ✓</div>
    </div>
    <div class="theme-card light">
      <div class="mini-screen">
        <div class="mini-header"></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
        <div class="mini-card"><div class="mini-title"></div><div class="mini-text"></div></div>
      </div>
      <div class="theme-label">${t.lightLabel}</div>
    </div>
  </div>
  <div class="features">${featuresHTML}</div>
</body>
</html>`;
}

// Generate Feature Graphic for Google Play (1024x500)
function generateFeatureGraphicHTML(t) {
  const size = FEATURE_GRAPHIC_SIZE;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size.width}px;
      height: ${size.height}px;
      font-family: 'Inter', -apple-system, sans-serif;
      background: linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #134e4a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      color: white;
      padding: 40px 60px;
    }
    .logo {
      width: 180px;
      height: 180px;
      border-radius: 40px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
      border: 4px solid rgba(255,255,255,0.3);
      flex-shrink: 0;
    }
    .logo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .title {
      font-size: 72px;
      font-weight: 800;
      line-height: 1.1;
    }
    .highlight {
      background: linear-gradient(90deg, #10b981, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      font-size: 28px;
      color: #94a3b8;
    }
    .flags {
      display: flex;
      gap: 16px;
      font-size: 36px;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="logo"><img src="LOGO_PLACEHOLDER" alt="Rawdah"></div>
  <div class="content">
    <h1 class="title"><span class="highlight">${t.title}</span></h1>
    <p class="subtitle">${t.subtitle}</p>
    <div class="flags">🇰🇿 🇷🇺 🇬🇧 🇹🇷</div>
  </div>
</body>
</html>`;
}

// Screen generators
const screenGenerators = [
  { name: 'hero', generate: generateScreen1HTML, key: 'screen1' },
  { name: 'names', generate: generateScreen2HTML, key: 'screen2' },
  { name: 'quiz', generate: generateScreen3HTML, key: 'screen3' },
  { name: 'gamification', generate: generateScreen4HTML, key: 'screen4' },
  { name: 'themes', generate: generateScreen5HTML, key: 'screen5' }
];

async function generateScreenshots() {
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Load logo as base64
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const logoBase64 = fs.readFileSync(logoPath).toString('base64');
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;

  console.log('🚀 Starting screenshot generation...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const languages = ['ru', 'en'];
  const devices = ['iphone', 'ipad'];
  let count = 0;
  const total = languages.length * devices.length * screenGenerators.length + languages.length; // +2 for feature graphics

  for (const lang of languages) {
    const langDir = path.join(outputDir, lang);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    for (const device of devices) {
      const size = SIZES[device];
      const deviceDir = path.join(langDir, device);
      if (!fs.existsSync(deviceDir)) {
        fs.mkdirSync(deviceDir, { recursive: true });
      }

      for (let i = 0; i < screenGenerators.length; i++) {
        const screen = screenGenerators[i];
        const t = translations[lang][screen.key];
        let html = screen.generate(t, size);
        html = html.replace('LOGO_PLACEHOLDER', logoDataUrl);

        const page = await browser.newPage();
        await page.setViewport({ width: size.width, height: size.height });
        await page.setContent(html, { waitUntil: 'networkidle0' });

        // Wait for fonts to load
        await page.evaluate(() => document.fonts.ready);
        await new Promise(r => setTimeout(r, 500));

        const filename = `${i + 1}_${screen.name}.png`;
        const filepath = path.join(deviceDir, filename);
        await page.screenshot({ path: filepath, type: 'png' });
        await page.close();

        count++;
        console.log(`✅ [${count}/${total}] ${lang}/${device}/${filename}`);
      }
    }

    // Generate Feature Graphic for this language
    const fgT = translations[lang].featureGraphic;
    let fgHtml = generateFeatureGraphicHTML(fgT);
    fgHtml = fgHtml.replace('LOGO_PLACEHOLDER', logoDataUrl);

    const fgPage = await browser.newPage();
    await fgPage.setViewport({ width: FEATURE_GRAPHIC_SIZE.width, height: FEATURE_GRAPHIC_SIZE.height });
    await fgPage.setContent(fgHtml, { waitUntil: 'networkidle0' });
    await fgPage.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 500));

    const fgFilename = 'feature_graphic.png';
    const fgFilepath = path.join(langDir, fgFilename);
    await fgPage.screenshot({ path: fgFilepath, type: 'png' });
    await fgPage.close();

    count++;
    console.log(`✅ [${count}/${total}] ${lang}/${fgFilename}`);
  }

  await browser.close();

  console.log('\n🎉 Done! Generated', count, 'screenshots');
  console.log('📁 Output directory:', outputDir);
  console.log('\nStructure:');
  console.log('  output/');
  console.log('  ├── ru/');
  console.log('  │   ├── iphone/ (1242×2688)');
  console.log('  │   ├── ipad/ (2064×2752)');
  console.log('  │   └── feature_graphic.png (1024×500)');
  console.log('  └── en/');
  console.log('      ├── iphone/ (1242×2688)');
  console.log('      ├── ipad/ (2064×2752)');
  console.log('      └── feature_graphic.png (1024×500)');
}

generateScreenshots().catch(console.error);
