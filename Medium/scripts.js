const search = function search(a, t) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = Math.floor((l+r) /2);
        if (a[m] == t) { return m; }

        if (a[m] < a[r]) {
            if (t > a[m] && t <= a[r]) { 
                l = m + 1; 
            } else { 
                r = m - 1; 
            }
        } else {
            if (t >= a[l] && t < a[m]) { 
                r = m - 1; 
            }
            else {
                l = m + 1;
            }
        }
    }

    return -1;
}
console.log(search([11,3,14,5,6,0,22],5));
console.log(search([1,3,2],6));