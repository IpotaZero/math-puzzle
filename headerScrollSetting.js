window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header")
    let lastScrollY = window.scrollY
    let lastTimestamp = performance.now() // 前回のタイムスタンプ
    const speedThreshold = 3 // スクロール速度の閾値 (px/ms)

    const scrollFunction = (e) => {
        console.log(e)

        const currentScrollY = window.scrollY
        const currentTimestamp = performance.now()

        // 時間差分 (ms) と位置差分 (px) を計算
        const deltaTime = currentTimestamp - lastTimestamp
        const deltaY = currentScrollY - lastScrollY

        // スクロール速度 (px/ms) を計算
        const scrollSpeed = Math.abs(deltaY / deltaTime)

        // スクロール速度が閾値を超えた場合に処理を実行
        const fastEnough = scrollSpeed > speedThreshold

        if (deltaY > 0) {
            // 下にスクロール中
            if (scrollSpeed > speedThreshold / 2) header.classList.add("hidden")
        } else {
            // 上にスクロール中
            if (scrollSpeed > speedThreshold) header.classList.remove("hidden")
        }

        // ページ上部では常に表示
        if (currentScrollY < 100) {
            header.classList.remove("hidden")
            return
        }

        // 更新
        lastScrollY = currentScrollY
        lastTimestamp = currentTimestamp
    }

    window.addEventListener("scroll", scrollFunction)
    document.body.addEventListener("touchmove", scrollFunction)
})
