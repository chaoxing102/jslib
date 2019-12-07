(function(window){
    function Map(){
        this.data = {};
    }
    Map.prototype.put = function(key,value){
        this.data[key] = value;
    }

    Map.prototype.remove = function(key){
        if(this.data.hasOwnProperty(key)){
            delete this.data[key];
            return true;
        }
        return false;
    }

    Map.prototype.get = function(key){
        return this.data[key];
    }

    Map.prototype.forEach = function(fn){
        for(let p in this.data){
            fn(p,this.data[p]);
        }
    }

    window.LvbMap = Map;
})(window)