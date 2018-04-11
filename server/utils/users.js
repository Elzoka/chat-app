class Users {

    addUser (id, name, room) {
        var user = {id, name, room};
        if(this[room]){
            this[room].push(user);
        }else {
            this[room] = [];
            this[room].push(user);
        }
        return user;
    }
    removeUser (id) {
        var removedUser;
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                var edited = this[key].filter(user =>{
                    if(user.id === id){
                        removedUser = user;
                    }
                    return user.id !== id;
                });
            }
            this[key] = edited;
        }
        if(this[key] && this[key].length === 0) {
            delete this[key];
        }
        return removedUser;
    };

    getUser (id) {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                var found = this[key].find(user => user.id === id);
                if(found) break;
            }
        }
        return found;
    }
    getUserList (room) {
        if(this[room]){
            return this[room].map(user => user.name);
        }
        return [];
    }
}

module.exports = {Users};
