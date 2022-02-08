import * as $ from "jquery";

export module Util {
  var endpoint =
    "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

  function geturl() {
    let url: any = (<HTMLInputElement>document.getElementById("inputUrl"))
      .value;
    var protocol_ok =
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("ftp://");
    return !protocol_ok ? "http://" + url : url;
  }

  function getrandom() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  function genhash() {
    if (window !== undefined) {
      if (window.location.hash == "") {
        window.location.hash = getrandom();
      }
    }
  }

  function send_request(url: string) {
    if (window !== undefined) {
      endpoint = "https://api-ssl.bitly.com/v4/shorten";
      $.ajax({
        headers: {
          Authorization: "Bearer 5f9e93f2def52f8efdc265dddea543d7556b208e",
          "Content-Type": "application/json",
        },
        url: endpoint,
        type: "POST",
        data: {
          long_url: "https://dev.bitly.com/",
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
      });
    }
  }

  export function shorturl() {
    var longurl = geturl();
    // genhash();
    send_request(longurl);
  }

  // var hashh = window.location.hash.substr(1);

  // if (window.location.hash != "") {
  //   $.getJSON(endpoint + "/" + hashh, function (data) {
  //     data = data["result"];

  //     if (data != null) {
  //       window.location.href = data;
  //     }
  //   });
  // }
}
