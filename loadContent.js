const loadContent = async (page, to) => {
    if (page == null) return

    try {
        const response = await fetch(page, { cache: "no-store" })
        const text = await response.text()
        insertHTML(wrapIndentWithDivs(text), to)
    } catch (error) {
        console.error(error)
        insertHTML(`えらー`, to)
    }
}

const insertHTML = (html, to) => {
    // コンテンツを挿入する要素を取得
    const contentContainer = document.querySelector(to)
    contentContainer.innerHTML = html
}
