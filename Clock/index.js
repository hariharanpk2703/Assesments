
                function updateClock(){
                  var now = new Date();
                  var hou = now.getHours(),
                      min = now.getMinutes(),
                      sec = now.getSeconds(),
                      pe = "AM";

                    
            
                      if(hou >= 12){
                        pe = "PM";
                      }
                      if(hou == 0){
                        hou = 12;
                      }
                      if(hou > 12){
                        hou = hou - 12;
                      }
            
                      Number.prototype.pad = function(digits){
                        for(var n = this.toString(); n.length < digits; n = 0 + n);
                        return n;
                      }
                      
                      var ids = ["hour", "minutes", "seconds", "period"];
                      var values = [hou.pad(2), min.pad(2), sec.pad(2), pe];
                      for(var i = 0; i < ids.length; i++)
                      document.getElementById(ids[i]).firstChild.nodeValue = values[i];
                    
                }
            
                function initClock(){
                  updateClock();
                  window.setInterval("updateClock()", 1);
                
                }
        
