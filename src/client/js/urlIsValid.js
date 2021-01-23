function isValidUrl(inputText)
{
  let regexp;
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(inputText))
        {
          return true;
        }
        else
        {
          return false;
        }
}

// console.log(isValidUrl("http://www.example.com"));
// console.log(isValidUrl("https://www.example.com"));
// console.log(isValidUrl("www.example.com"));  
// console.log( 'This is a good article ');

function checkUrl(outputArr, type) {
  return outputArr.filter(function(arrayElement) {
    return arrayElement.url.match(type);
  });
}



export {isValidUrl, checkUrl }






