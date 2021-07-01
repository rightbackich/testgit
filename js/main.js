// Import stylesheets;

// Деструктуризация. Экстра задания.

// Задание №1 done
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let obj = {
//     name: "John", 
//     years: 30,
//     isAdmin: 'is admin'
// };
// let {name, age, isAdmin} = obj;
// name = name;
// age = obj.years;
// isAdmin = isAdmin;
// alert(name);
// alert(age);
// if (isAdmin === undefined) {
//     alert(false)
// } else {
// alert(isAdmin)
// }


// Задание №2 done
// Переделайте следующий код через деструктуризацию:

// function func(employee) {
//     let name = employee[0];
//     let surname = employee[1];
//     let department = employee[2];
//     let position = employee[3];
//     let salary = employee[4];
//     console.log(name, surname, department, position, salary);
// }
// func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// function func(arr) {
//     let [name, surname, department, position, salary] = arr;
//     console.log(name, surname, department, position, salary);
// }
// func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// Задание №3 done
// Значение переменной firstName равно 32, lastName равно Michael, и age равно Jackson.
// Поменяйте значения переменные так, чтобы в них хранились соответствующие значения.
// Используйте деструктуризацию.

// let firstName = 32;
// let lastName = 'Michael';
// let age = 'Jackson';

// // let name = lastName;
// // let realAge = firstName;
// // let surname = age;

// let data = [lastName, age, firstName];
// [firstName, lastName, age] = [lastName, age, firstName];
// console.log(firstName, lastName, age);

// Задание №4
// Напишите функцию, которая принимает массив из чисел и возвращает сумму всех чисел, кроме первых двух.
// Используйте деструктуризацию.

// function func(arr) {
//     let [first, second, ...rest] = arr;
//     console.log(rest);
//     return rest.reduce((sum, cur) => sum += cur)
// }   
// console.log(func([1, 2, 3, 4, 5]));

// Задание №5 done
// Дан объект {name: 'Patrick', age: '22', dog: {dogName: 'Hachi', age: 2}}
// Используя деструктуризацию вывести в консоль свойства dogName и age.

// let obj = {
//     name: 'Patrick', 
//     age: '22', 
//     dog: {
//         dogName: 'Hachi', 
//         age: 2}
// };

// let {dog: {dogName, age}} = obj;
// console.log(dogName, age);