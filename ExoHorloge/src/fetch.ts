const showData = document.getElementById('data') as HTMLDivElement

const test = fetch('https://baconipsum.com/api/?type=meat-and-filler')
    .then(response => response.json())
    .then((data) => showData.innerText = data[0])
    .then(data => console.log(data))
    .catch(error => console.error(error))

export{
    test
}