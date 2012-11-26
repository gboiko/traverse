var traverse = (function (object) {
    function Traverse (prop) {
        if (object && prop) return traverse(object[prop]);
        else return prop ? traverse() : object;
    }

    Traverse.set = function (path,value) {
        if (path) {
            var keys = path.split('.'), i = 0, len = keys.length, obj = object;
            console.log(obj);
            for ( ;i<len; i++) {
                if (!obj[keys[i]]) obj[keys[i]] = {};
                if (i == (len - 1)) obj[keys[i]] = value;
                obj = obj[keys[i]];c
            }
            return obj;
        }
    };

    Traverse.get = function (path) {
        if (path) {
            var keys = path.split('.'), i = 0, len = keys.length, obj = object;
            for ( ;i<len; i++) {
                if (obj[keys[i]]) obj = obj[keys[i]];
                else return false;
            }
            return obj;
        }
        return this;
    };

    return Traverse;
});

