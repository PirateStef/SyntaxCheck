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
        var h4            = document.createElement("h4");
        var linkUrl       = data.documents[i].url;
        var p             = document.createElement("p");
        var description   = document.createTextNode(data.documents[i].slug);
        var el            = document.createElement("div");

        p.appendChild(description);
        console.log(p);
        h4.appendChild(linkName);
        a.appendChild(h4);
        a.href            = linkUrl;
        a.appendChild(p);
        el.appendChild(a);
        el.className      = "extension_el";
        $('.extension_content').append(el);
      };
    };
    function emptySearchContent() {
      $('.extension_content').children().remove();
    };
  });
};
