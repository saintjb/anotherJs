let soldier = {
    health: 40,
    armor: 100
};

let Jack = {
    health:200,
};

Jack.__proto__ = soldier;
alert(Jack.armor);