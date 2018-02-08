jsRandom= {
  get: function(min,max) {
    var d=new Date();
    var iter=d.getMonth()*100+d.getDate();
    var toRet=null;
    while( --iter ) toRet=Math.floor(min+Math.random()*(max+1-min));
    return toRet;
  }
  , test: function(counter) {
    var min=0;
    var max=10;
    counter=counter||15;
    for( var i=0; i<counter; ++i ) {
      console.log( "#",i, "between", min, "and", max, "is", jsRandom.get(min,max));
    }

    min=-5;
    var max=5;
    for( var i=0; i<counter; ++i ) {
      console.log( "#",i, "between", min, "and", max, "is", jsRandom.get(min,max));
    }

    min=0;
    var max=0;
    for( var i=0; i<counter; ++i ) {
      console.log( "#",i, "between", min, "and", max, "is", jsRandom.get(min,max));
    }

    min=20;
    var max=0;
    for( var i=0; i<counter; ++i ) {
      console.log( "#",i, "between", min, "and", max, "is", jsRandom.get(min,max));
    }
  }
}
