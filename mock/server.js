let http = require('http'),
  fs = require('fs'),
  url = require('url'),//
  path = require('path');

//读取book.json
function read(cb,fileUrl) {
  fs.readFile(path.join(__dirname, fileUrl), 'utf-8', function (err, data) {//读取文件
    if (err || data.length == 0) {
      cb([])//没长度或者错误就是空数组
    } else {
			console.log(JSON.parse(data));
      cb(JSON.parse(data));//读出来转化成数组
    }
  })
}

//存入数据到book.json
function write(data, cb) {
  fs.writeFile(path.join(__dirname, './book.json'), JSON.stringify(data), cb)
}

let pageSize = 5;
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();/*让options请求快速返回*/

  let {pathname, query} = url.parse(req.url, true);//不加true query就不是对象
  if (pathname === '/city') {
    read(function (citys) {//代表所有读出的结果
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end(JSON.stringify(citys));
    },'./city.json')
    return
  }
	if (pathname === '/index') {
	  read(function (indexs) {//代表所有读出的结果
	    res.setHeader('Content-Type', 'application/json;charset=utf-8');
	    res.end(JSON.stringify(indexs));
	  },'./index.json')
	  return
	}

	if (pathname === '/detail') {
	  read(function (details) {//代表所有读出的结果
	    res.setHeader('Content-Type', 'application/json;charset=utf-8');
	    res.end(JSON.stringify(details));
	  },'./detail.json')
	  return
	}

}).listen(3000);
