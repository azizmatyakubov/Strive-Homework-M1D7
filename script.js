const h1 = () => {
    document.getElementById('h1').innerText = 'Yes, you changed it'
}

const background = () => {
    document.getElementById('main').style.backgroundColor = "lightblue"
}

const adress = () => {
    document.getElementById('adress').innerText = "GET DAYONE GERMANY, GmbH, Rheinsberger Str. 76/77, 10115 Berlin, Germany"
    document.getElementById('adress').style.fontSize = '16px'
}

const addClass = () => {
    let arrayOfA = document.getElementsByTagName('a')
    for(let i=0; i <arrayOfA.length; i++) {
        arrayOfA[i].classList.add('new-class')
    }
}

const toggle = () => {
    let x = document.getElementsByClassName('product-header')

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}