function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        display: function() {
            console.log(this.name + ' has ' + this.skills.length + ' skills');
        }
    };
    return member;
}