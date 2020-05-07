// $(document).ready(function(){
//     $('.list-item:first').hover(function(){
//         $(this).toggleClass('active');
//     });
//     $('.list-item:eq(2)').on('click', function(){
//         $('.image:even').fadeToggle('slow');
//     });
//     $('.list-item:eq(4)').on('click', function(){
//         $('.image:odd').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             }, 4000
//         );
//     });
// });

// function User(name, age){
//     this.name = name;
//     let userAge = age;
//     this.getAge = function(){
//         return userAge;
//     };

//     this.say = function say(){
//         console.log(`Name of user ${this.name}, age: ${this.userAge}`);
//     };
// }

// let user = new User('Alex', 23);
// // user.say();
// console.log(user.getAge());
// console.log(user.name);

let user = (function(){
    let private = function(){
        console.log('Hello from private');
    };
    let sayHello = function(){
        console.log('Hello');
    };
    return{
        sayHello: sayHello
    };
}());

console.log(user);
console.log(user.sayHello());
