function loginAdmin(username, password) {
    var url = HOST + "api/admin/login";
    console.log("url: ", url)
    console.log("host: ", HOST)
    try{
        return fetch(url, {
            credentials: 'same-origin',
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then(res => res.json()).then(json => {
            console.log("data" + json.token)
            if (json.code !== 200) {
                throw new Error("Login failed");
            }
            json.data.user.timestamp = (new Date()).getTime();
            
            return json.data;
        });
    } catch (error){
        console.error("Error during login:", error);
        throw error;
    }
}