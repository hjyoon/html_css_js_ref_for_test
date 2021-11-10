let count = 2;

// window.onscroll = (e) => {
//     console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         // setTimeout(() => {
//         //     const addContent = document.createElement("div");
//         //     addContent.classList.add("box")
//         //     addContent.innerHTML = `<p>${++count}번째 블록</p>`
//         //     document.querySelector('section').appendChild(addContent);
//         // }, 100)
//         const addContent = document.createElement("div");
//         addContent.classList.add("box")
//         addContent.innerHTML = `<p>${++count}번째 블록</p>`
//         document.querySelector('section').appendChild(addContent);
//     }
// }

document.addEventListener('scroll', (event) => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if (scrollHeight - Math.round(scrollTop) === clientHeight) {
        const addContent = document.createElement("div");
        addContent.classList.add("box")
        addContent.innerHTML = `<p>${++count}번째 블록</p>`
        document.querySelector('section').appendChild(addContent);
    }
})