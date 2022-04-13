import axios from 'axios'; // package.json에 등록되어 node_modules폴더에 설치된 axois 라이브러리를 들고온다.

// 1. HTTP Request $ Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/',
}

// 2. API 함수들을 정리
async function fetchList(pageName) 
{
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch (error) {
        console.log(error);        
    }
}

async function fetchUserInfo(username) // 인자인 이름에 해당하는 정보 조회
{ 
    try {
        const response = await axios.get(`${config.baseUrl}user/${username}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemDetail(id)
{
    try {
        const response = await axios.get(`${config.baseUrl}item/${id}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }    
}

export {
    fetchUserInfo,
    fetchItemDetail,
    fetchList
}