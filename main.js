//String Number Boolean Object Array
//String - เป็นตัวอักษร

/* //เครื่องหมายและEX
let name = 'John';
const idcard = '03125';
  
//Number
let age = 20; 
let height = 174; 

//Boolean
let isSingle = true;

fistname = 'Jane'
console,log("Name:",fistname, "Age:",age,);

/*
+
-
*
/
% หารเอาเศษ
== เท่ากับ
!= ไม่เท่า่กับ
>
<
>=
<=  
*/

/* //เข็คเลขว่าเท่ากันหรือไม่
let number1 = 5
let number2 = 5
let result = number1 == number2     
console.log('new number' ,result) //new number true #


//if-else
if (number1 != number2){
    console.log('this if')
}else if (number1 == number2){
    console.log('this else if')
}else {
    console.log('this is else') //this else if #
}
*/

/*
&& และ
 || หรือ
 ! นิเสธ
*/


/* //Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
*/

/* //กรอกคะแนนผ่านคี
let score = prompt("Enter your score: ");
console.log('you have score',score)
if (score >=80){
    console.log('Grade A');
} else if (score >=70){
    console.log('Grade B');
} else if (score >=60){
    console.log('Grade C');
} else if (score >=50){
    console.log('Grade D');
} else {
    console.log('Grade F'); //ใส่เกรด you have score 65 and Grade C
}
*/

//Boolean
/*let number = 20
if (number % 2 == 0) {
    console.log('your number is even');
}
*/

//true || false = true !(true) == false
/*let number1 = 8
let number2 = 10
let condition = !(number1 >= 3 || number2 >=5)
console.log('result of condition: ',condition)
*/

/*let age = 20
let gender = 'male'
//true&&true == true
if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
}
*/


/* //for
let count = 0;

/*while (count < 10) { //true -> false
    console.log('Hello');
    count = count + 1;
    counter += 1;
    counter++;
}
*/

/* //อนันต์
for (let counter = 0; counter < 10; counter+1) {
    console.log('Hello');
}
*/

/*let age1 = 18;
let age2 = 19;
let age3 = 20;
console.log('age1, age2, age3');*/


/* //pop age
let ages = [18, 19, 20]
console.log('age is',ages[2]);
console.log('age is',ages);

//1 แทนที่
ages = [21, 22, 23]
console.log('new age is',ages);

//2 ต่อ array
ages.push(23);
console.log('age list',ages);

ages.pop()
console.log('pop list',ages);
*/

/*Error
let ages = [18,19,20];
console.log('age is',ages);
age1.sort();
console.log('age is',ages);
*/

 //Array list

/* //push name
let name_list = ['John','Bob','Alice',]
name_list.push('David');
console.log('name_list is',name_list.length);
console.log('name_list is',name_list[0]);
console.log('name_list is',name_list[1]);
console.log('name_list is',name_list[2]);
console.log('name_list is',name_list[3]);

for(let index = 0; index < name_list.length; index++){
    console.log('for name_list is',name_list[index]);
}
*/

//Object + Array

/* //pop student
let student = [{
    age : 20,
    name : 'John',
    grade :'A'
},{
    age : 21,
    name : 'Bob',
    grade :'B'
},{
    age : 22,
    name : 'Alice',
    grade :'C'
}];
student.pop()

for(let index = 0; index < student.length; index++){
    console.log('Student number',index + 1);
    console.log('Name:', student[index].name);
    console.log('Age:', student[index].age);
    console.log('Grade:', student[index].grade);
}
*/

/* //จำไม่ได้
let scores1 = 50
let scores2 = 60
let grade = ''
//Arrows function
let calculateGrade = (scores) => {    //Arrows function
if (scores >= 80) {
    grade = 'A';
}else if (scores >= 70) {
    grade = 'B';
}else if (scores >= 60) {
    grade = 'C';
}else if (scores >= 50) {
    grade = 'D';
}else {
    grade = 'F';
}
return grade;
}
//เรียกใช้function โดยส่ง scores1,2 เข้าไป
let grade1 = calculateGrade(scores1);
let grade2 = calculateGrade(scores2);
console.log('grade1:', grade1);
console.log('grade2:', grade2);
*/

/* // push newscore>30
let  score =[10,20,30,40,50]
let newScore = []

for (let index = 0; index < score.length; index++){
    console.log('score:', score[index]);
    if (score[index] >= 30) {
        newScore.push(score[index]);
    }
}
console.log('newScore:', newScore);

newScore.forEach((ns) => {
    console.log('new score:',ns);
}); 
*/

/* //find,map
let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },{
        name: 'Bob',
        score: 95,
        grade: 'A'
    },
]

let student = students.find((s) => {
    if (s.name == 'John') {
        return true;
    }
});

let doublescore = students.map((s) => {
    score = s.score * 2;
    return s
})
console.log('student',students);
console.log('double score',doublescore);
*/
