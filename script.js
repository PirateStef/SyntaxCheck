function search() {
  var search = $("input").val();
  var url_search = "https://developer.mozilla.org/en-US/search.json?q=" + search;
  $.getJSON(url_search, function(data){
    console.log(url_search);
    if ( $('.content').children().length >= 1) {
      emptySearchContent();
      loadSearchContent();
    } else {
      loadSearchContent();
    }
    function loadSearchContent() {
      for (var i = 0; i < data.documents.length; i++) {
        var a             = document.createElement("a");
        var linkName      = document.createTextNode(data.documents[i].title);
        var linkUrl       = data.documents[i].url;
        // var p             = document.createElement("p");
        var excerpt       = data.documents[i].excerpt;
        var el            = document.createElement("div");
        a.appendChild(linkName);
        a.appendChild(excerpt);
        a.href            = linkUrl;
        el.appendChild(a);
        el.className      = "el";
        $('.content').append(el);
      };
    };
    function emptySearchContent() {
      $('.content').children().remove();
    };
  });
};
