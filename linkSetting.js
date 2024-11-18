// urlの変更が発生した時に、#topとかを見て正しいページを表示させる
const loadPage = async () => {
    const pageId = location.hash

    await loadContent(pageId.slice(1) + ".html", "main")
    texToMathML()
}

window.addEventListener("popstate", (event) => {
    event.preventDefault()

    loadPage()
})

window.addEventListener("load", (event) => {
    event.preventDefault()

    loadPage()
})

if (location.hash == "") location.href += "#top"
