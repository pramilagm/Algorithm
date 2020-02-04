function vowelsANdConsonant(e) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vow = [];
    var conso = [];
    for (let i = 0; i < e.length; i++) {
        // console.log(vowels.indexOf(e[i]) >= 0);
        if (vowels.indexOf(e[i]) >= 0) {
            vow.push(e[i])

        } else {
            conso.push(e[i])
        }
        var result = vow.concat(conso);
        result.forEach(function (item) {
            console.log(item);
        })

    }

}
vowelsANdConsonant('Hello');