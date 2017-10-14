
fixTranslateBubble()
function fixPopupIcon() {
    const buttonIcon = document.querySelector('#gtx-trans')
    if (buttonIcon) {
        buttonIcon.style.position = 'fixed'
    }
}
function fixTranslateBubble() {
    const style = document.createElement('style')
    style.innerText = '.jfk-bubble { position: fixed !important; }'
    document.body.append(style)
    document.body.addEventListener('click', () => {
        setTimeout(fixPopupIcon, 500)
    })
}
