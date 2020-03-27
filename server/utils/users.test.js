const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();

    users.users = [
      {
        id: 1,
        name: 'Mike',
        room: 'node'
      },
      {
        id: 2,
        name: 'Jen',
        room: 'react'
      },
      {
        id: 3,
        name: 'Julie',
        room: 'node'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: 123,
      name: 'Ozgun',
      room: 'office fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = 1;

    var user = users.removeUser(userId);

    expect(user).toBeTruthy();
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = 100;

    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = 1;

    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = 100;

    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return all names', () => {
    var userList = users.getUserList('node');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
});
