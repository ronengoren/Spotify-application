// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

function decodeString(s) {
    let regex = /(\d+)\[([a-z]*)\]/g;
    let str = s.replace(regex, (match, num, group) => group.repeat(num));
    let testCheck = regex.test(str)
    if (testCheck) {
        return decodeString(str)
    }
    return str


}

decodeString("4[ab]");
decodeString("2[b3[a]]");
decodeString("1[t1[h1[e]]] 1[f1[r2[e]]] 1[a2[p]] 1[f1[o1[r]]] 1[p1[e1[o1[p1[l1[e]]]]]] 1[w1[h1[o]]] 1[n2[e]1[d]] 1[l1[o1[t1[s]]]] 1[o1[f]] 1[a2[t]1[e]1[n1[t1[i1[o1[n]]]]]].")