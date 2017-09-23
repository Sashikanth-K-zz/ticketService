function ScreenFactory() {
    var Theaters = [];

    function addScreen(obj) {
        var length = Theaters.length;
        obj['id'] = length + 1;
        console.log(obj);
        Theaters.push(obj);
    }

    function getAllScreens() {
        return Theaters;
    }

    function getOneScreen(id) {
        var required = null;
        var length = Theaters.length;
        var i = 0 ;
        for( i = 0; i < length ; i++){
            if(Theaters[i].id == id){
                return Theaters[i];
            }
        }
        return required;
    }

    function updateScreen(id, screen) {
        var flag = false;
        Theaters.forEach(function (obj) {
            if (obj.id == id) {
                //obj = screen;
                obj.totalSeats = screen.totalSeats;
                obj.availableSeats = screen.availableSeats;
                flag = true;
            }
        }, this);

        return flag;
    }

    return {
        'addScreen': addScreen,
        'updateScreen': updateScreen,
        'getAll': getAllScreens,
        'getOne': getOneScreen
    }
}


module.exports = ScreenFactory();