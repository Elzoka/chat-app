const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users['Node Course'] = [{id: '1', name: 'Mike'}, {id: '3', name: 'Julie'}];
        users['React Course'] = [{id: '2', name: 'Jen'}];

    })
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users[user.room]).toEqual([user]);
    });

    it('should return names for node course', () => {
        var usersList = users.getUserList('Node Course');
        expect(usersList).toEqual(['Mike', 'Julie'])
    });

    it('should return names for react course', () => {
        var usersList = users.getUserList('React Course');
        expect(usersList).toEqual(['Jen'])
    });

    it('should remove a user', () => {
        var removedUser = users.removeUser('1');
        expect(removedUser).toEqual({id: '1', name: 'Mike'});
        expect(users['Node Course'].length).toBe(1);
    });

    it('should not remove user', () => {
        var removedUser = users.removeUser('7');
        expect(removedUser).toBe(undefined);
        expect(users['Node Course'].length).toBe(2);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual({id: '1', name: 'Mike'});
    });

    it('should not found user', () => {
        var user = users.getUser('7');
        expect(user).toBe(undefined);
    });
})
