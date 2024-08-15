
let cookie = $request.headers["cookie"] || $request.headers["Cookie"];
let accesstoken = $request.headers["accesstoken"] || $request.headers["accessToken"];
let user_agent = $request.headers["user-agent"] || $request.headers["User-Agent"];

if (cookie) {
    $prefs.setValueForKey(cookie, "Steampy_Cookie");
}
if (accesstoken) {
    $prefs.setValueForKey(accesstoken, "Steampy_accessToken");
}
if (user_agent) {
    $prefs.setValueForKey(user_agent, "Steampy_user_agent");
}

$notify("Steampy_Cookie", "Cookie 和 accesstoken 获取成功", `cookie: ${cookie}
accesstoken: ${accesstoken}`);

$done();
