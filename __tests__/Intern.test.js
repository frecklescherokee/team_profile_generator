const Intern = require ('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern ('Dave', 1, 'dave@email.com', 'Stanford');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('dave@email.com');
    expect(intern.school).toEqual('Stanford');
    expect(intern.getSchool()).toEqual('Stanford');
    expect(intern.getRole()).toBe("Intern");
  });