import Cookies from 'js-cookie'

var authToken = null
var userInfo = {};

const HOST = window.apiHOST
authToken = localStorage.getItem("cookie")

// Function old
try{ 
userInfo = JSON.parse( localStorage.getItem("userInfo")??"{}" )
 var date = (new Date()).getTime()
 if (date > userInfo.timestamp + 1000*60*60*14){
    clearData()
    authToken = null
    userInfo = {}
 }   
} catch {

}

function setToken (token){
    authToken = token;
    localStorage.setItem("token",token);

}

function isAuthen(){
    return authToken !== null
}

function clearData(){
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
}

function setUserInfo(user){
    localStorage.setItem("userInfo",JSON.stringify(user));
    userInfo = user;
}
function getUsetInfo()
{
    return userInfo;
}

function nameToSlug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "ảåàáãäâấèéëêếệẹìíïîĩợớơờòóöôộốùúüûủưừñç·/_,:;";
    var to =   "aaaaaaaaeeeeeeeiiiiioooooooooouuuuuuunc------";
  
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
  
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "_") // collapse whitespace and replace by -
      .replace(/-+/g, "_"); // collapse dashes
  
    return str;
}

function displayTime(time){
    if (time == null){
        return "N/a"
    }
    var a = new Date(time * 1);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =  hour + ':' + min  ;
    return time;
}
function displayDateTime(time){
    if (time == null){
        return "N/a"
    }
    var a = new Date(time * 1);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '/' + month + '/' + year + '-' + hour + ':' + min + ':' + sec ;
    return time;
}
function displayDate(time){
    if (time == null){
        return "N/a"
    }
    var a = new Date(time * 1);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '/' + month + '/' + year  ;
    return time;
}
function displayTitle(model){
    if (model.title !== null && model.title !== ""){
        return model.title
    }
    if (model.details == null){
        return "";
    }
    let listName = []
    for (var k of model.details){
    listName.push(k.title)
    }
    return listName.join(",")
}

function getHeader_cookie(more = {}){
    return  {"Content-Type":"application/json",...more,Cookie:authToken};  
}
function getHeader_cookie2(more = {}){
    return  {...more,Cookie:authToken};  
}

function setCookie (name, value, path){
    Cookies.set(name, value, {path:path});
    localStorage.setItem("cookie", Cookies);
    authToken = Cookies;
}

function clearData2(){
    localStorage.removeItem("cookie");
    localStorage.removeItem("userInfo");
    authToken = null;
}

function loginAdmin(username, password) {
    var url = HOST + "api/admin/login";
    console.log("url: ", url)
    console.log("host: ", HOST)
    try{
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: getHeader_cookie()
        }).then(res => res.json()).then(json => {
            console.log("data" + json.data.token)
            if (json.code !== 200) {
                throw new Error("Login failed");
            }
            
            json.data.user.timestamp = (new Date()).getTime();
            setUserInfo(json.data.user);
            setCookie(json.data.cookie.name, json.data.cookie.value, json.data.cookie.path)
            return json.data;
        })
    } catch (error){
        console.error("Error during login:", error);
        throw error;
    }
   
}

function logoutAdmin(){
    var url = HOST + "api/admin/logout";
    console.log("url: ", url)
    console.log("host: ", HOST)
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: getHeader_cookie()
    }).then(res => res.json()).then(json => {
        if (json.code !== 200) {
            throw new Error("Logout failed");
        }
        console.log("Logout success")
        clearData2();
        return json.message;
    });
}

function getMusic(id){
    var url = HOST + "api/song/" + id;
    return fetch(url, {
        headers: getHeader_cookie()
    }).then(res => res.json()).then(json =>{
        if (json.code !== 200){
            throw new Error("Request Failed")
        }
        return json.data;
    })
}
function getPageMusicAll(filter){ 
   
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    }  
    var url = HOST+"api/song/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";
 
    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}

function apiGetPageAllAlbum(filter){
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    } 
    var url = HOST + "api/album/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";

    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}

function apiGetPageAllCategory(filter){
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    } 
    var url = HOST + "api/category/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";

    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}

function apiGetPageAllCountry(filter){
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    } 
    var url = HOST + "api/country/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";

    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}

function apiGetPageAllPlaylist(filter){
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    } 
    var url = HOST + "api/playlist/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";

    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}

function uploadSong(data){
    var url = HOST+"api/song/upload";
     return  fetch(url,{
        method: 'POST',
        mode: 'cors', 
        body: data,
        // headers:  getHeader_cookie()
    }).then(res => res.json()).then( json=>{
        if (json.code !==200){
            throw "Request Failed"
            return;
        }  
        return json.data;
    });
}

function apiAddPlaylist(data){
    var url = HOST + "api/playlist/add";
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: data, 
        // headers:  getHeader_cookie()
    }).then(res => res.json()).then( json=>{
        if (json.code !==200){
            throw "Request Failed"
            return;
        }  
        return json.data;
    });
}

function apiAddAlbum(data){
    var url = HOST + "api/album/add";
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: data, 
        // headers:  getHeader_cookie()
    }).then(res => res.json()).then( json=>{
        if (json.code !==200){
            throw "Request Failed"
            return;
        }  
        return json.data;
    });
}
function apiAddCategory(data){
    var url = HOST + "api/category/add";
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: data, 
        // headers:  getHeader_cookie()
    }).then(res => res.json()).then( json=>{
        if (json.code !==200){
            throw "Request Failed"
            return;
        }  
        return json.data;
    });
}
function apiAddCountry(data){
    var url = HOST + "api/country/add";
    return fetch(url, {
        method: "POST",
        mode: "cors",
        body: data, 
        // headers:  getHeader_cookie()
    }).then(res => res.json()).then( json=>{
        if (json.code !==200){
            throw "Request Failed"
            return;
        }  
        return json.data;
    });
}
function apiGetAllAlbum(){
    var url = HOST + "api/album/get/all";
    return fetch(url, {
        method: "GET",
    }).then(res => res.json()).then( json => {
        if (json.code !== 200){
            throw new Error("Request Faile")
        }
        return json.data
    })
}
function apiGetAllCategory(){
    var url = HOST + "api/category/get/all";
    return fetch(url, {
        method: "GET",
    }).then(res => res.json()).then( json => {
        if (json.code !== 200){
            throw new Error("Request Faile")
        }
        return json.data
    })
}
function apiGetAllCountry(){
    var url = HOST + "api/country/get/all";
    return fetch(url, {
        method: "GET",
    }).then(res => res.json()).then( json => {
        if (json.code !== 200){
            throw new Error("Request Faile")
        }
        return json.data
    })
}
function apiGetAllPlaylist(){
    var url = HOST + "api/playlist/get/all";
    return fetch(url, {
        method: "GET",
    }).then(res => res.json()).then( json => {
        if (json.code !== 200){
            throw new Error("Request Faile")
        }
        return json.data
    })
}
function apiGetAllSinger(){
    var url = HOST + "api/singer/get/all";
    return fetch(url, {
        method: "GET",
    }).then(res => res.json()).then( json => {
        if (json.code !== 200){
            throw new Error("Request Faile")
        }
        return json.data
    })
}

function apiGetPageAllUser(filter){
    var request = { 
        page:filter.page-1,
        limit:filter.limit  ?? 20
    } 
    var url = HOST + "api/user/get/bypage/"+request.page+"?limit="+request.limit+"&sortType=desc";

    return  fetch(url,{
        method: 'GET',  
        headers:  getHeader_cookie2()
    }).then(res => res.json()).then(json=>{
        if (json.code != 200){
            throw "Error request"
            return;
        } 
        if (json.data == null ){
            throw "Error request"
        } 
        return json.data;
    });
}
export  {
    setToken,
    isAuthen,
    getUsetInfo,
    clearData,
    nameToSlug,
    displayTime,
    displayDate,
    displayDateTime,
    displayTitle,

    HOST,
    
    loginAdmin,
    getMusic,
    logoutAdmin,
    getPageMusicAll,
    uploadSong,
    apiGetPageAllAlbum,
    apiGetPageAllCategory,
    apiGetPageAllCountry,
    apiGetPageAllPlaylist,
    apiAddPlaylist,
    apiAddAlbum,
    apiAddCategory,
    apiAddCountry,
    apiGetAllAlbum,
    apiGetAllCategory,
    apiGetAllPlaylist,
    apiGetAllCountry,
    apiGetAllSinger,
    apiGetPageAllUser
}