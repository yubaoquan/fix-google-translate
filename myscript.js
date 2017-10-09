
fixTranslateBubble()

function fixTranslateBubble() {
    const style = document.createElement('style')
    style.innerText = '.jfk-bubble { position: fixed !important; }'
    document.body.append(style)
}
