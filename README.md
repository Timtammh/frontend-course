# 1. 初始化 Git（話俾部電腦聽呢個 Folder 要用 Git 管理）
git init

# 2. 將你目前 Folder 內所有檔案都加入暫存區
git add .

# 3. 提交並寫個紀錄（好似玩遊戲 Save 檔咁）
git commit -m "feat: first backup from school school pc"

# 4. 設定主分支名稱為 main
git branch -M main

# 5. 連接你在步驟 1 建立的 GitHub 網址（去網頁複製嗰條 https://github.com/... 嘅 link）
git remote add origin 你的GitHub網址.git

# 6. 推上雲端！(第一次推可能需要登入 GitHub 帳號)
git push -u origin main

-----------------------------------------------

用 cd 指令去到你想擺放呢個 Project 嘅地方。例如你想擺喺桌面（Desktop）：
cd ~/Desktop

當你返到屋企，打開 VS Code，喺你想擺放嘅地方開 Terminal，輸入：
git clone 你的GitHub網址.git

-----------------------------------------------

每次寫完嘢，只需要重覆呢 3 條指令（俗稱「Git 三部曲」）：
git add .
git commit -m "fix: 今日寫咗啲咩..."
git push

-----------------------------------------------

你只需要用 VS Code 打開舊 Folder，喺 Terminal 輸入：
git pull

-----------------------------------------------

🟢 U (Untracked)：新開的 File，Git 還沒追蹤（還沒放進紙箱）。
🟡 M (Modified)：以前 Save 過的舊 File，你剛剛改了裡面的內容（需要重新打包）。
🔵 A (Added)：你行了 git add . 之後，字母會由 U 變成 A，代表成功放入紙箱，準備好出貨。
⚪ 字母消失：你行了 git commit 後，字母消失，代表已經安全存在本地倉庫的歷史紀錄裡。

在 Project 的根目錄建立一個叫 .gitignore 的隱藏文字檔，裡面寫入你不希望丟上 GitHub 的垃圾或大型檔案（如 Mac 的系統垃圾檔、或者重型的套件夾）：
node_modules/
.DS_Store
*.log