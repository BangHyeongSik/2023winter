const ip = '192.168.45.150';
const port = 3000;
const ip_port = port !== -1 ? `${ip}:${port}` : ip;
const url = `http://${ip_port}/api/`;

const postButton = document.getElementById('postButton');
const putButton = document.getElementById('putButton');
const patchButton = document.getElementById('patchButton');
const deleteButton = document.getElementById('deleteButton');

const postUserName = document.getElementById('post_userName');

const putUserIndex = document.getElementById('put_userIndex');
const putUserName = document.getElementById('put_userName');
const putPV = document.getElementById('put_pv');
const putSP = document.getElementById('put_sp');
const putMV = document.getElementById('put_mv');

const patchUserIndex = document.getElementById('patch_userIndex');
const patchKey = document.getElementById('patch_key');
const patchValue = document.getElementById('patch_value');

const deleteUserIndex = document.getElementById('delete_userIndex');


const postClick = () => {
    const userName = postUserName.value;
    const command = `${url}post/users/${userName}`;

    console.log(command);
    fetch(command).then((res) => res.json()).then((data) => console.log(data)).catch((err) => conaole.log(err));
};

const putClick = () => {
    const userIndex = putUserIndex.value;
    const userName = putUserName.value;
    const pv = putPV.value;
    const sp = putSP.value;
    const mv = putMV.value;
    const command = `${url}put/users/${userIndex}/${userName}/${pv}/${sp}/${mv}`;

    console.log(command);
    fetch(command).then((res) => res.json()).then((data) => console.log(data)).catch((err) => conaole.log(err));
};

const patchClick = () => {
    const userIndex = patchUserIndex.value;
    const key = patchKey.value;
    const value = patchValue.value;
    const command = `${url}patch/users/${userIndex}/${key}/${value}`;

    console.log(command);
    fetch(command).then((res) => res.json()).then((data) => console.log(data)).catch((err) => conaole.log(err));
};

const deleteClick = () => {
    const userIndex = deleteUserIndex.value;
    const command = `${url}delete/users/${userIndex}`;

    console.log(command);
    fetch(command).then((res) => res.json()).then((data) => console.log(data)).catch((err) => conaole.log(err));
};
