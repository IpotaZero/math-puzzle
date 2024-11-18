const wrapIndentWithDivs = (text) => {
    // 元の内容を行ごとに分割
    const lines = text.split("\n")
    const wrappedLines = lines.map((line) => {
        const indentLevel = line.match(/^(\s{4})+/) // 先頭の4スペースごとのインデントを確認
        if (indentLevel) {
            const levelCount = indentLevel[0].length / 4 // インデントのレベルを計算
            let wrappedLine = line.trim()
            for (let i = 0; i < levelCount; i++) {
                wrappedLine = `<div class="indent">${wrappedLine}</div>` // インデントごとに .indent で囲む
            }
            return wrappedLine
        } else {
            return line.trim() // インデントがない行はそのまま
        }
    })

    return wrappedLines.join("\n")
}

// 数式を表示するやつ
const texToMathML = () => {
    document.querySelectorAll(".note").forEach((note) => {
        console.log(note)
        note.innerHTML = note.innerHTML.replace(/'([^']*?)'/g, (match, p1) => TeXZilla.toMathMLString(p1))
    })
}
