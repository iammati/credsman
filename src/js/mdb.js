export function mdb() {
    Array.from(document.querySelectorAll('form input')).map(node => {
        node.onkeyup = e => {
            e.target.value.length > 0 ? (!e.target.classList.contains('active') && e.target.classList.add('active'))
            : (e.target.classList.contains('active') && e.target.classList.remove('active'));
        }
    })
}
