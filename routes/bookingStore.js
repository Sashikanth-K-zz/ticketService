function BookingStore() {
    var store = [];

    function book(obj) {
        var length = store.length;
        obj['bookId'] = length + 1;
        console.log(obj);
        store.push(obj);
        return obj;
    }

    function getAllBookings() {
        return store;
    }

    function getOneBooking(id) {
        var required = null;
        var length = store.length;
        var i = 0 ;
        for( i = 0; i < length ; i++){
            if(store[i].id == id){
                return store[i];
            }
        }
        return required;
    }

    return {
        'book': book,
        'getAll': getAllBookings,
        'getOne': getOneBooking
    }
}


module.exports = BookingStore();