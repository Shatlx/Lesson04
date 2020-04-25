'use strict';

//Блок с глобальными переменными
let money;
let time;

let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {   //Запрос обязательных статей расхода и добавление в БД
        for (let i = 0; i < 2; i++) {
            let expenses = prompt("Введите обязательную статью расходов в этом месяце");
            let costExpenses = prompt("Во сколько обойдется?");
    
            if (typeof (expenses) === "string" && typeof (expenses) != null && typeof (costExpenses) != null &&
                expenses != "" && costExpenses != "" && expenses.length < 50) {
                appData.expenses[expenses] = costExpenses;
            } else {
                console.log("bad result");
                i--;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDey = (appData.budget / 30).toFixed();

        alert("Ежедневный бюджет " + appData.moneyPerDey);    
    },
    detectLevel: function() {
        if (appData.moneyPerDey < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDey > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }    
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?");
            let persent = +prompt("Под какой процент?");
    
            appData.monthIncome = save * persent / 100 / 12;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }    
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optExpenses = prompt("Введите необязательную статью расходов в этом месяце");
    
            if (typeof (optExpenses) === "string" && typeof (optExpenses) != null && 
            optExpenses != "" && optExpenses.length < 50) {
                appData.optionalExpenses[i+1] = optExpenses;
            } else {
                console.log("bad result");
                i--;
            }
        }      
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? Перечислите через запятую", "");
        
        while (!isNaN(items) || items == "" || items == null) {
            items = prompt("Что принесет дополнительный доход? Перечислите через запятую", "");
        }
        appData.income = items.split(",");

        let replayItems = prompt("Может что-то еще?");

        while (!isNaN(replayItems) || replayItems == "" || replayItems == null) {
            replayItems = prompt("Может что-то еще?");
        }

        appData.income.push(replayItems);
        appData.income.sort();

        let mass = appData.income;
        let str;
        mass.forEach(function(item, index, mass) {
            str = mass.join(", ");
        });
        alert("Способы доп. заработка: " + str);
    },
};


start(); //Старт приложения с запросом месячного бюджета и даты

console.log("Наша программа включает в себя данные: ");

for (let key in appData) {
    console.log(key);
    //console.log(key + ": " + appData[key]);
}

/* chooseExpenses(); //Запрос статей расходов

detectDayBudget();

checkSavings(); //Запрос размера банковского депозита и вычисление дохода
//в месяц с депозита

detectLevel();  //Расчет уровня достатка

chooseOptExpenses(); */

//console.log(appData);  //Вывод БД

//Запрос бюджета на месяц
function start() {
    money = +prompt("Ваш бюджет на месяц?", "50000"); //бюджет на месяц
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }

    appData.budget = money;
    appData.timeData = time;
}

//Запрос обязательных статей расхода и добавление в БД
/* function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expenses = prompt("Введите обязательную статью расходов в этом месяце");
        let costExpenses = prompt("Во сколько обойдется?");

        if (typeof (expenses) === "string" && typeof (expenses) != null && typeof (costExpenses) != null &&
            expenses != "" && costExpenses != "" && expenses.length < 50) {
            appData.expenses[expenses] = costExpenses;
        } else {
            console.log("bad result");
            i--;
        }
    }
} */

//Запрос списка названий необязательных статей расхода и добавление в БД, без стоимости
/* function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optExpenses = prompt("Введите необязательную статью расходов в этом месяце");

        if (typeof (optExpenses) === "string" && typeof (optExpenses) != null && 
        optExpenses != "" && optExpenses.length < 50) {
            appData.optionalExpenses[i+1] = optExpenses;
        } else {
            console.log("bad result");
            i--;
        }
    }  
}
 */
/* //Запрос необязательных статей расхода и добавление в БД
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optExpenses = prompt("Введите необязательную статью расходов в этом месяце");
        let costOptExpenses = prompt("Во сколько обойдется?");

        if (typeof (optExpenses) === "string" && typeof (optExpenses) != null && typeof (costOptExpenses) != null &&
        optExpenses != "" && costOptExpenses != "" && optExpenses.length < 50) {
            console.log("done");
            appData.optionalExpenses[i+1] = costOptExpenses;
        } else {
            console.log("bad result");
            i--;
        }
    }  
} */

//Вычисление месячного дохода от банковских накоплений
/* function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let persent = +prompt("Под какой процент?");

        appData.monthIncome = save * persent / 100 / 12;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
 */
//Вычисление бюджета на 1 день
/* function detectDayBudget() {
    appData.moneyPerDey = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет " + appData.moneyPerDey);
}
 */
/* //Расчет уровня достатка
function detectLevel() {
    if (appData.moneyPerDey < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDey > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
} */