const Engineer = require ('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@email.com', 'dave@github.com');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('dave@email.com');
    expect(engineer.github).toBe('dave@github.com');
    expect(engineer.getGithub()).toEqual('dave@github.com');
    expect(engineer.getRole()).toBe("Engineer");
  });