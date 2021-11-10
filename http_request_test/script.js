const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const img_dog = document.querySelector('#img_dog')
const dogs_list = document.querySelector('#dogs_list')
const URL = 'https://dog.ceo/api/breeds/image/random'

// axios 사용
// btn.addEventListener('click', (event) => {
//     axios.get(URL).then(response => {
//         img_dog.setAttribute('src', response.data.message)
//     })
// })

// async & await 로 구현
btn.addEventListener('click', async (event) => {
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        img_dog.setAttribute('src', data.message)
    }
    catch (e) {
        console.log(e);
    }
})

// 하나씩 처리
// btn2.addEventListener('click', async (event) => {
//     for (let i = 0; i < 20; i++) {
//         try {
//             const response = await fetch(URL)
//             //res.push(myfnc())
//             console.log(i)
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json()
//             const new_dog_img = document.createElement('img')
//             new_dog_img.setAttribute('src', data.message)
//             dogs_list.appendChild(new_dog_img)
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }
// })

// const myfnc = async (i) => {
//     const response = await fetch(URL)
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json()
//     const new_dog_img = document.createElement('img')
//     new_dog_img.setAttribute('src', data.message)
//     dogs_list.appendChild(new_dog_img)
//     console.log(i + ' ' + data)
// }

// 더 빠른 방법
btn2.addEventListener('click', (event) => {
    for (let i = 0; i < 20; i++) {
        try {
            // myfnc(i)
            // 익명 화살표 함수 즉시 호출
            (async (i) => {
                const new_dog_img = document.createElement('img')
                new_dog_img.setAttribute('src', './loading.gif')
                dogs_list.appendChild(new_dog_img)
                const response = await fetch(URL)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                new_dog_img.setAttribute('src', data.message)
                new_dog_img.setAttribute('object-fit', 'scale-down')
                console.log(i + ' ' + data)
            })(i)
            console.log(i)
        }
        catch (e) {
            console.log(e);
        }
    }
})