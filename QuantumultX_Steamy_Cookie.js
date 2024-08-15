
// 获取请求头中的 cookie, accessToken 和 user-agent
let cookie = $request.headers['cookie'] || $request.headers['Cookie'];
let accessToken = $request.headers['accesstoken'] || $request.headers['accessToken'];
let userAgent = $request.headers['user-agent'] || $request.headers['User-Agent'];

// 设置本地存储
if (cookie) {
    $prefs.set('Steampy_Cookie', cookie);
}
if (accessToken) {
    $prefs.set('Steampy_accessToken', accessToken);
}
if (userAgent) {
    $prefs.set('Steampy_user_agent', userAgent);
}

// 发送通知
$notify('Steampy_Cookie', 'Cookie 和 accessToken 获取成功', `cookie: ${cookie}\naccessToken: ${accessToken}`);

// 结束脚本
$done();
