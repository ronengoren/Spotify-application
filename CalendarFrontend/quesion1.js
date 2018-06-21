// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters.





function sortByString(s, t) {
    return s.split('').sort((a, b) => {
        return t.indexOf(a) - t.indexOf(b);
    }).join('');
}

alert(sortByString("ronen", "goren"))