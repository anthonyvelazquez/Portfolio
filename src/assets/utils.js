var OpenAnimation = (function() {

  return {
    func1: function() {
        if($("#intro").css("max-height") == "0px") {
            $("#intro").css("max-height","999px");
            $("#intro").css("padding","5% 1%");
          }
    },
    // func2: function() {
    //   alert('function 2 called');
    // }
  }

})(OpenAnimation||{})

