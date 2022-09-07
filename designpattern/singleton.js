const Singleton = (function(){
    let instance;
     function createInstance(){
         let obj = new Object('I am an instance');
         return obj;
     }
    
     return {
         getInstance : function(){
             if(!instance){
                 instance = createInstance();
             }
             return instance;
         }
     }
    
    })()
    
    function run() {
    
        var instance1 = Singleton.getInstance();
        var instance2 = Singleton.getInstance();
    
        console.log("Same instance? " + (instance1 === instance2));
    }
    run();