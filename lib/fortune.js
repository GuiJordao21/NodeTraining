var fortuneCookies=[
        "sorte do dia 1",
        "sorte do dia 2",
        "sorte do dia 3",
        "sorte do dia 4",
        "sorte do dia 5"
];

//precsamos exporta isso para q essa func seja vista fora do modulo e possa ser chamada no meadowlark.js. usando isso, deixamos a funcao publica mas preservamos as infos da var, q fica encapsulada!
exports.getFortune = function(){
        var idn = Math.floor(Math.random()*fortuneCookies.lenght);
        return fortuneCookies[idx];
};
