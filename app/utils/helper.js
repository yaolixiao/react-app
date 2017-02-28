import axios from 'axios';

function getCode(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

export default function getGithubInfo(username){
    // 将请求回来的数据做了一个 merge 操作
    return axios.all([
        getCode(username),
        getUserInfo(username)
    ])
        .then((arr) => ({
            codes: arr[0].data,
            userInfos: arr[1].data}
        ));
}