// Question 2 -- decodeString(s)


function decodeString(s) {
    var regex = /(\d+)\[([a-z]*)\]/g;
    var str = s.replace(regex, (match, num, group) => group.repeat(num));
    var testCheck = regex.test(str)
    if (testCheck) {
        return decodeString(str)
    }
    return str


}

decodeString("4[ab]");
decodeString("2[b3[a]]");
decodeString("1[t1[h1[e]]] 1[f1[r2[e]]] 1[a2[p]] 1[f1[o1[r]]] 1[p1[e1[o1[p1[l1[e]]]]]] 1[w1[h1[o]]] 1[n2[e]1[d]] 1[l1[o1[t1[s]]]] 1[o1[f]] 1[a2[t]1[e]1[n1[t1[i1[o1[n]]]]]].")