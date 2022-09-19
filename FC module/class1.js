class Person
{
    constructor(name,age)
    {
        
        this.name = name
        this.age = age
    }
    showName()
    {
        return this.name
    }
    showAge()
    {
        return this.age
    }
}

class Student extends Person 
{
    constructor(name,age,rollNumber,totalMarks)
    {
        super(name,age)
        this.rollNumber = rollNumber
        this.totalMarks = totalMarks
    }
    showRollNumber()
    {
        return this.rollNumber
    }
    showTotalmarks()
    {
        return this.totalMarks
    }
}
const person1 = new Person("Rohit",22)
console.log(person1.showAge())

const person2 = new Person("Rahul",25)
console.log(person2.showAge())

const student1 = new Student("Rakesh",24,12,55)
console.log(student1.showRollNumber())
