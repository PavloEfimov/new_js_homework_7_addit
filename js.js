// задание 1

function createUserCard() {
    const body = document.querySelector("body");
    const Claudia = document.createElement('div');
    Claudia.classList.add('main');
    const Claudia_inner = document.createElement('div')
    Claudia_inner.classList.add('inner');
    const Claudia_foto = document.createElement('img')
    const Claudia_name = document.createElement('div')
    Claudia_name.classList.add('name');
    const Claudia_age_address = document.createElement('div')
    Claudia_age_address.classList.add('age_address');
    const Claudia_age = document.createElement('div')
    Claudia_age.classList.add('age');
    const Claudia_address = document.createElement('div')
    Claudia_address.classList.add('address');
    const footer = document.createElement('footer')
    const strawberry = document.createElement('img')
    const strawberry_count = document.createElement('p')
    const lemon = document.createElement('img')
    const lemon_count = document.createElement('p')
    const hand = document.createElement('img')

    Claudia_foto.setAttribute('src', 'img/foto1.jpg');
    strawberry.setAttribute('src', 'img/Strawberry.png');
    strawberry_count.innerHTML = '19';
    lemon.setAttribute('src', 'img/lemon.png');
    lemon_count.innerHTML = '6';
    hand.setAttribute('src', 'img/hand.png');
    Claudia_foto.setAttribute('src', 'img/foto1.jpg');
    Claudia_name.innerHTML = 'Claudia Cardinale_first';
    Claudia_age.innerHTML = '29';
    Claudia_address.innerHTML = 'Philadelphia, PA';
    body.appendChild(Claudia);
    Claudia.appendChild(Claudia_inner);
    Claudia_inner.appendChild(Claudia_foto);
    Claudia_inner.appendChild(Claudia_name);
    Claudia_inner.appendChild(Claudia_age_address);
    Claudia_age_address.appendChild(Claudia_age);
    Claudia_age_address.appendChild(Claudia_address);
    Claudia_inner.appendChild(footer);
    footer.appendChild(strawberry);
    footer.appendChild(strawberry_count);
    footer.appendChild(lemon);
    footer.appendChild(lemon_count);
    footer.appendChild(hand);
}

createUserCard();

// задание 2

function createUserCard2() {
    let result = `<div class="main">
    				<div class="inner">
    					<img src="img/foto1.jpg">
    					<div class="name">Claudia Cardinale_second</div>
    					<div class="age_address">
    						<div class="age">29</div>
    						<div class="address">Philadelphia, PA</div>
    					</div>
    					<footer>
    						<img src="img/Strawberry.png">
    						<p>19</p>
    						<img src="img/lemon.png">
    						<p>6</p>
    						<img src="img/hand.png">
    					</footer>
    				</div>
    			   </div>`;
    return result;
}

document.querySelector("body").innerHTML += createUserCard2();

// задание 3

const a = {
    img: 'img/foto2.jpg',
    name: 'Miss First',
    age: 20,
    location: 'Kiev, Ukraine',
    strawberries: 10,
    lemons: 10
};

const b = {
    img: 'img/foto3.jpg',
    name: 'Miss Second',
    age: 22,
    location: 'Kharkiv, Ukraine',
    strawberries: 12,
    lemons: 12
};

const c = {
    img: 'img/foto4.jpg',
    name: 'Miss Third',
    age: 24,
    location: 'Odessa, Ukraine',
    strawberries: 14,
    lemons: 14
};

function createUserCard3(user) {
    const img = user.img;
    const name = user.name;
    const age = user.age;
    const location = user.location;
    const strawberries = user.strawberries;
    const lemons = user.lemons;

    let result = `<div class="main">
    				<div class="inner">
    					<img src=${img}>
    					<div class="name">${name}</div>
    					<div class="age_address">
    						<div class="age">${age}</div>
    						<div class="address">${location}</div>
    					</div>
    					<footer>
    						<img src="img/Strawberry.png">
    						<p>${strawberries}</p>
    						<img src="img/lemon.png">
    						<p>${lemons}</p>
    						<img src="img/hand.png">
    					</footer>
    				</div>
    			   </div>`;
    return result;
}


const res = +prompt('введите 1 или 2 или 3', '1/2/3');

switch (res) {
    case 1:
        document.querySelector("body").innerHTML += createUserCard3(a);
        break;
    case 2:
        document.querySelector("body").innerHTML += createUserCard3(b);
        break;
    case 3:
        document.querySelector("body").innerHTML += createUserCard3(c);
        break;
}