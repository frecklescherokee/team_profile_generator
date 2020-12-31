const Manager = require ('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@email.com', 101);
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('dave@email.com');
    expect(manager.officeNumber).toBe(101);
    expect(manager.getOfficeNumber()).toEqual(101);
    expect(manager.getRole()).toBe("Manager");
  });