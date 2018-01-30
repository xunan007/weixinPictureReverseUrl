## 一个简单的代理服务器，用来做反微信防盗链的小Tip。

解决方法：置空`Referer`字段，加上`User-Agent`字段。

使用方法：每次嵌入`img`标签的时候把`src`改写成`<代理服务器地址>/getwxImg?param=url`即可
