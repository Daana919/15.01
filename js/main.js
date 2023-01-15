// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS


// let conf = confirm('black theme?');

//  if(confirm) {
//     // document.body.style.backgroundColor = 'black';
//     // document.body.style.color = 'white';
//     document.body.classList.add('dark')
//  }
//  else {
//     // document.body.style.backgroundColor = 'white';
//     // document.body.style.color = 'black';
//     document.body.classList.add('white')
//  };


 // 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена)

//  let btn = document.querySelector('button');
//  let list = document.querySelector('ul');

//  btn.addEventListener('click', () => {
//         let order = prompt('Add prod and price').split(' ')
//         list.innerHTML += `<li>name:${order[0]}, price: ${order[1]}$</li>`
//  });





// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие)

// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', (e) => {
// let info = prompt('Введите ссылку, ширину и высоту').split(' ');
// let img = document.createElement('img');
// document.body.append(img)
// img.src = info[0];
// img.style.width = info[1] + "px"
// img.style.height = info[2]+ "px"
// });

// btn2.addEventListener('click', e => {
//     let ask = prompt('Enter color, width and height with space between them');
//     ask = ask.split(' ')

//     let div = document.createElement('div')
//     document.body.append(div);

//     div.style.backgroundColor = ask[0]
//     div.style.width = ask[1] + "px"
//     div.style.height = ask[2] + "px"
// });

// let db = [
//         {
//             title: 'Samsung S10',
//             category: 'electronics',
//             price: 700,
//             desc: 'Super phone for your life!',
//             img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png'
//         },
//         {
//             title: 'iPhone 13 Pro',
//             category: 'electronics',
//             price: 1100,
//             desc: 'One of the most powerful cameras!',
//             img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg'
//         },
//         {
//             title: 'Apple',
//             category: 'fruits',
//             price: 2,
//             desc: 'Healthy fruit that is used in many dishes and desserts.',
//             img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg'
//         },
//         {
//             title: 'Orange',
//             category: 'fruits',
//             price: 7,
//             desc: 'Fruit for one of the most popular types of juice.',
//             img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg'
//         },
//         {
//             title: 'Audi R8',
//             category: 'cars',
//             price: 98000,
//             desc: 'A sports car that can reach tremendous speed.',
//             img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg'
//         }
//     ]
    

// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ)


// let list = document.querySelector('ul')
// let btn = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// function show (category='all') {
//     let filteredDb = JSON.parse(JSON.stringify(db));
//     if(category !== 'all'){
//         filteredDb = filteredDb.filter(item =>{
//             return item.category == category 
//         })
//     }
//     list.innerHTML = ''
//     db.forEach(item => {
//         let li = document.createElement('li');
//         list.append(li)
//         li.innerText =`<li> category: ${item.category}; Название: ${item.title}, Цена: ${item.price}  </li>`
//         let img = document.createElement('img');
//         li.append(img)
//         img.src = item.img
//         img.width = 100;
//         img.height = 100
//     })
// }
// show()
// btn.addEventListener('click', e =>{
//     let ask =  prompt('Какая категория вам нужна?');
//     show(ask)
// })

// btn.addEventListener('click', e => {
//     let ask = prompt('Какая категория вам нужна?');
//     list.innerHTML = ''
//     db.forEach(item => {
//         if(item.category == ask) {
//             let li = document.createElement('li');
//             list.append(li)
//             li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}`
//             let img = document.createElement('img');
//             li.append(img)
//             img.src = item.img
//             img.width = 100;
//             img.height = 100
//         }
//     })
// })


// btn2.addEventListener('click', e => {
//     show()
// })           


// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым


// let ul = document.querySelector('ul');
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     let ask = prompt('enter name, price and img').split(' ');
    
//     let ul = document.querySelector('ul')
//     let li = document.querySelector('li')
//     li.innerHTML += `name:${ask[0]},  price:${ask[1]} `
//     let img = document.createElement('img');
//     li.append(img)
//     img.src = ask[2]
//     img.width = 200;
//     img.height = 200;
//     if(+ask[1] < 100) {
//             li.style.color = "red"
//     } else {
//             li.style.color = "green" 
//             }
// });


// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница) input checkbox = как вытащить екгу /false

// создаем форму 
// кнопка по нажатию кпаковываем инфо в объект 
// {name, id, age,  mailing: false }
// вывести в лист некорые поля в li 
// name, mainling: значение инпута( галочки) перебираем масссив, если true то выводим алерт 

// инпут на стринице меняет 


let form = document.querySelectorAll('form');
let name = document.querySelector('#name');
let pass = document.querySelector('#pass');
let age = document.querySelector('#age');
let btn = document.querySelector('button');
let sendBtn = document.querySelector('#send')
let list = document.querySelector('ul')

let arr = [];

btn.addEventListener('click', e =>{
    list.innerHTML += `<li> name: ${name.value}, age:${age.value} </li>`
    let input = document.createElement('input')
    input.setAttribute("type", "checkbox")
    list.append(input);

    let newObj = {
        id: Date.now(),
        name: name.value,
        pass: pass.value,
        age: age.value,
        mailing: false
    };
    console.log(newObj);
    arr.push(newObj);

});

sendBtn.addEventListener('click', (e) =>{
    let list2 = document.querySelector('li');
    
})

