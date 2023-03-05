export default function bitcoinFetch(url, target) {
    fetch(url)
    .then(response => response.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch(erro => {
        console.log(Error(erro))
    })
}