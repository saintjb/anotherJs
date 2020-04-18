"use strict";

let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    choose_expenses: function(){
        for (let i = 0; i < 2; i++){
            let ans = prompt('Введите обязательную статью расходов в этом месяце', '');
            let ans1 = +prompt('Во сколько обойдется?', '');
            if (typeof(ans) === 'string' && typeof(ans) != null && typeof(ans1) != null
                && ans != '' && ans1 != '' && ans.length < 50){   
                 appData.expenses[ans] = ans1;
                }
            else{
                i = i - 1;
                }
        }
    },
    check_savings: function(){
        if(appData.savings == true){
            let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12 * percent;
            alert('Доход в месяц с депозита: ' + appData.monthIncome);
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Budget for day ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log('Minimun level of income');
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Medium level of income');
        }
        else if ( appData.moneyPerDay > 2000) {
            console.log('High level of income');
        }
        else {
            console.log("Error");
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i<3; i++){
            let opt = prompt('Point of outcomes: ', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt('New incomes: (variants with comma separator)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Anything else: ', ''));
        appData.income.sort();
    }
};
