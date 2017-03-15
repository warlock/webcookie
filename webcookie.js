var wc = {
  "set": function (key, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
  },
  "get": function (key) {
    var a = document.cookie.split('; ');
    a.forEach(function (e) {
      var x = e.split('=');
      if (x[0] === key) return x[1];
    });
  }
};

if (typeof process === 'object') module.exports = wc;
