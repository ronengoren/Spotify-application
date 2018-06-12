// Question 1 -- sortByStrings


function sortByString(s, t) {
    return s.split('').sort((a, b) => {
        return t.indexOf(a) - t.indexOf(b);
    }).join('');
}

sortByString("ronen", "goren")