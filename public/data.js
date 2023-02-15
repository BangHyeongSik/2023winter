const ip = '192.168.45.143';
const port = 3000;

const ip_port = port !== -1 ? `${ip}:${port}` : ip;
const url = `http://${ip_port}/api/get/users/`;

let user_index = 0;

const input = document.getElementById('user_index');
const button = document.getElementById('submit');

const title = document.getElementById('title');
const pv = document.getElementById('pv');
const sp = document.getElementById('sp');
const mv = document.getElementById('mv');


const getUserIndex = () => {
    
    if (!isNaN(input.value)) {
        user_index = input.value;
    } else {
        alert('Invalid Number');
    }
};

const setControllerData = (user_data) => {
    title.innerText = user_data.name;
    pv.innerText = user_data.pv.toFixed(1);
    sp.innerText = user_data.sp.toFixed(1);
    mv.innerText = user_data.mv.toFixed(1);

    console.log(user_data)
};

const initialize = (err) => {
    user_index = 0;

    alert("잘못된 값을 입력하여 초기화합니다.");
    console.log(err);
};

setInterval(() => {
    const api = `${url}${user_index}`;
    fetch(api)
    .then((res) => res.json())
    .then((data) => setControllerData(data.user_data))
    .catch((err) => initialize(err));
}, 1000);