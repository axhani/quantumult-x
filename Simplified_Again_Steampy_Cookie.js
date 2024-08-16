
// Further simplified Steampy_Cookie Script for Quantumult X
const cookie = $request.headers["cookie"] || $request.headers["Cookie"];
const accesstoken = $request.headers["accesstoken"] || $request.headers["accessToken"];
const user_agent = $request.headers["user-agent"] || $request.headers["User-Agent"];

if (cookie) {
    $prefs.setValueForKey(cookie, "Steampy_Cookie");
}
if (accesstoken) {
    $prefs.setValueForKey(accesstoken, "Steampy_accessToken");
}
if (user_agent) {
    $prefs.setValueForKey(user_agent, "Steampy_user_agent");
}

console.log("Steampy_Cookie: Cookie 和 accesstoken 获取成功");
$notify("Steampy_Cookie", "Cookie 和 accesstoken 获取成功", "Cookie: " + cookie + "\nAccessToken: " + accesstoken + "\nUser-Agent: " + user_agent);

$done();
