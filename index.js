
//---------------------------------------方式一---------------------------------------
// 判断手机号是否合法
export function isTelFunc(tel) {
  var reg = /^1[3456789]\d{9}$/;
  return reg.test(tel);
}

// exports.isTelFunc=isTel;


// 时间戳转年月日时分秒
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}


// file转base64
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


// 返回true，则不走店铺认证状态逻辑
export function isAllow(userLogin) {

  var nameListArray = ["19863230990", "13589620993", "18464759959", "14706323535", "13589620522", "18464758858", "13963231800", "13516371035", "18464753322", "17663218003", "18663268160", "17863289393", "14706326565", "15263271177", "18663299678", "13562222097", "18263263353", "19963229090", "15562235611", "15588226876", "13793735680", "13280258586", "15165867855", "18265220899", "13589625501", "16568222288", "18363709586", "13963291683", "18366665067", "15588216212", "18766663356", "13210784444", "15665785157", "15797705896", "18369278060"];

  for (var i = 0; i < nameListArray.length; i++) {
    if (nameListArray[i] == userLogin) {
      return true;
    }
  }
  return false;

}




//---------------------------------------方式二---------------------------------------
// 判断手机号是否合法
function isTelFunc(tel) {
  var reg = /^1[3456789]\d{9}$/;
  return reg.test(tel);
}



// 时间戳转年月日时分秒
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// file转base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


// 返回true，则不走店铺认证状态逻辑
function isAllow(userLogin) {

  var nameListArray = ["19863230990", "13589620993", "18464759959", "14706323535", "13589620522", "18464758858", "13963231800", "13516371035", "18464753322", "17663218003", "18663268160", "17863289393", "14706326565", "15263271177", "18663299678", "13562222097", "18263263353", "19963229090", "15562235611", "15588226876", "13793735680", "13280258586", "15165867855", "18265220899", "13589625501", "16568222288", "18363709586", "13963291683", "18366665067", "15588216212", "18766663356", "13210784444", "15665785157", "15797705896", "18369278060"];

  for (var i = 0; i < nameListArray.length; i++) {
    if (nameListArray[i] == userLogin) {
      return true;
    }
  }
  return false;

}



//结尾处将该方法暴露出来供外部调用
export default {
  fileToBase64,
  isTelFunc,
  formatDate,
  isAllow

}