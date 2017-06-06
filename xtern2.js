const sportsForm = document.querySelector('form#sportsForm')

function soccer(ev) {
    ev.preventDefault()
    const li = document.createElement('li')
    const text = document.getElementById('sportInput').value
    li.textContent = text
    document.getElementById('list').appendChild(li)
}
sportsForm.addEventListener('submit', soccer)