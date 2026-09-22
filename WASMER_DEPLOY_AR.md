# نشر BLACK VEIL على Wasmer — خطوة بخطوة (عربي)

## بعد ما ترفع الملف Unzipped تعمل ايه؟

### الطريقة 1: عن طريق Dashboard (أسهل — بدون أوامر)

1. **افتح https://wasmer.io واعمل Login**

2. **دوس `Deploy` أو `New App`**

3. **اختار `Static Website` أو `Import from GitHub`**
   - لو هترفع الملف: اختار `Deploy static site` أو `Upload folder`
   - ارفع الفولدر اللي فكيته (اللي فيه `dist` و `mobile.html` و `wasmer.toml`)

4. **لما يسألك عن الإعدادات:**
   - **Framework:** اختار `Static` أو `Other` / `Vite` (لو مش لاقي Static)
   - **Build Command:** 
     - لو رفعت الفولدر وفيه `dist` جاهز: سيبه فاضي أو اكتب `echo "dist already built"`
     - لو رفعت السورس كود كامل: اكتب `npm install --ignore-scripts && npm run build`
   - **Publish Directory / Output Directory / Public Directory:** 
     - اكتب `dist` ← **ده أهم حاجة**
     - لو رفعت فولدر `dist` نفسه بس: اكتب `.` أو `/`
   - **Install Command:** `npm install --ignore-scripts` (لو محتاج build)
   - **Node Version:** 18 أو 20

5. **دوس Deploy**

6. **هيطلعلك لينك زي:**
   ```
   https://black-veil-m11-dev.wasmer.app
   https://black-veil-m11-dev--v1.wasmer.app
   ```
   افتحه والعب مباشرة!

---

### الطريقة 2: عن طريق CLI (أسرع)

```bash
# نزل Wasmer CLI
curl https://get.wasmer.io -sSfL | sh
# أو من https://wasmer.io/download

# Login
wasmer login

# روح لفولدر اللعبة
cd Black-Viel-1.2.0

# ابنِ اللعبة (لو dist مش موجود)
npm install --ignore-scripts
npm run build

# Deploy
wasmer deploy
# أو
wasmer app create --template static-website
# هيطلب منك:
# Who should own this app? → اكتب اليوزر بتاعك مثلا m11-dev
# What should be the name? → black-veil

# بعد كده
wasmer deploy
```

هيطلعلك:
```
App black-veil was successfully deployed 🚀
https://black-veil-m11-dev.wasmer.app
```

---

### ملفات Wasmer اللي جهزتهالك:

**`wasmer.toml`:**
```toml
[package]
name = "m11-dev/black-veil"
version = "1.2.0"

[dependencies]
"sharrattj/static-web-server" = "1"

[fs]
public = "dist"
```

ده بيقول لـ Wasmer: استخدم static-web-server واخدم ملفات `dist`

**`app.yaml`:**
```yaml
kind: wasmer.io/App.v0
name: black-veil
owner: m11-dev
package:
  name: m11-dev/black-veil
  version: 1.2.0
```

---

### بعد الرفع تختار ايه؟

لو Dashboard سألك:

- **Project Type:** `Static Website` ✅
- **Root Directory:** `.` (لو الفولدر فيه wasmer.toml) أو `dist` لو عايز ترفع dist بس
- **Build Settings:**
  - Build Command: (فاضي لو dist جاهز) أو `npm run build`
  - Output Directory: `dist`
- **Environment:** `Production`
- **Domain:** سيبه default `*.wasmer.app` أو اربط دومين خاص

**متختارش:**
- ❌ PHP
- ❌ Database
- ❌ Node.js server (احنا static مش server)
- ❌ Python

اختار **Static** بس.

---

### لو رفعت الملف Unzipped وشايف فولدرات زي `public`, `src`, `dist`, `mobile.html`:

1. اتأكد ان `wasmer.toml` موجود في الروت (أنا جهزتهولك)
2. اتأكد ان `dist` فيه `index.html`
3. في Wasmer Dashboard:
   - Publish Directory = `dist`
   - لو عايز Mobile Launcher يبقى الصفحة الرئيسية: انسخ `mobile.html` جوه `dist` وسميه `index.html` أو خليه وادخل على `/mobile.html`
4. Deploy

**للموبايل بضغطة واحدة بدون Termux:**
- بعد النشر، افتح `https://your-app.wasmer.app/mobile.html` على الموبايل
- دوس ▶ العب الآن
- دوس 📲 تثبيت عشان يبقى أيقونة

---

### مشاكل شائعة:

**لو الصفحة بيضا:**
- اتأكد ان Publish Directory = `dist` مش `.`
- اتأكد ان `dist/index.html` موجود

**لو بيقول 404:**
- فعل SPA fallback: في wasmer.toml عندنا `args = ["--root", "dist", "--spa"]` — ده بيخلي أي رابط يرجع لـ index.html

**لو الصور مش ظاهرة:**
- اتأكد ان `dist/assets` اترفع (فيه skins 39MB)

---

### لينكات جاهزة بعد النشر:

- اللعبة: `https://black-veil-m11-dev.wasmer.app/`
- موبايل لانشر: `https://black-veil-m11-dev.wasmer.app/mobile.html`
- وان تاب: `https://black-veil-m11-dev.wasmer.app/Black-Veil-Mobile.html`

**M11 Dev — YouTube: @m11-dev**
