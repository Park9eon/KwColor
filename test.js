
const kWordCodeFirst = "가".charCodeAt(0);
const kWordCodeLast = "힣".charCodeAt(0);

var someString = "안녕하세요.";
for (var kWord of someString) {
  console.log(_krCutCon(kWord));
  console.log(_krCutCol(kWord));
  console.log(_krCutUnderCon(kWord));
}

function _krCutCon(kWord) {
  return _krCut(kWord, function(charCode) {
    var cutCode = 0x1100 + (((charCode - kWordCodeFirst) / 28) / 21);
    // console.log(cutCode);
    return String.fromCharCode(cutCode);
  });
}
function _krCutCol(kWord) {
  return _krCut(kWord, function(charCode) {
      return String.fromCharCode(0x1161 + (((charCode - kWordCodeFirst) / 28) % 21))
  });
}
function _krCutUnderCon(kWord) {
  return _krCut(kWord, function(charCode) {
    var charCode = (charCode - kWordCodeFirst) % 28;
    if (charCode == 0) {
      return "";
    } else {
      return String.fromCharCode(0x11A8 + charCode);
    }

  });
}
// callback은 charCode를 res합니다.
// callback리턴값으로 구분
function _krCut(kWord, callback) {
  if (kWord.length == 1) {
    var kWordCode = kWord.charCodeAt(0);
    // console.log(kWord, kWordCode);
    if (kWordCodeFirst <= kWordCode && kWordCode <= kWordCodeLast) {
      return callback(kWordCode);
    } else {
      return "" // 한글이 아님!
    }
  } else {
    return ""; // 한글자 이상임!
  }
}
