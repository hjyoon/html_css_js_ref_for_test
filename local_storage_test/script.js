const myStorage = window.localStorage

const inputTag = document.querySelector('#data')
const btnSave = document.querySelector('#btn_save')
const btnClear = document.querySelector('#btn_clear')

const savedData = myStorage.getItem('data')
inputTag.value = savedData

btnSave.addEventListener('click', (event) => {
    const value = inputTag.value
    myStorage.setItem('data', value) // 방법 1
    // myStorage.data = value // 방법 2
    // myStorage['data'] = value // 방법 3
})

btnClear.addEventListener('click', (event) => {
    inputTag.value = ''
    myStorage.clear() // 모든 데이터 삭제
    // myStorage.removeItem('data') // 해당 key에 해당하는 아이템 삭제
})