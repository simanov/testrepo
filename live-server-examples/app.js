const b2d = x => parseInt(x,2)     // binary to decimal
const d2b = x => x.toString(2)     // decimal to binary

permission =    '00000000000100000000000000010100'; //object permission

role1 =         '10000000000100000000000000011000';
role2 =         '00000000000100000000000000011100';

p = b2d(permission);
r1 = b2d(role1);
r2 = b2d(role2);

calc1 = p & r1;
calc2 = p & r2;

res1 = calc1 >= p;
res2 = calc2 >= p;

console.log('permission =   ' + p, permission);
console.log('role1 =        ' + r1, role1);
console.log('role2 =        ' + r2, role2);
console.log('_______________________');
console.log('calc1 = ' + calc1);
console.log('calc2 = ' + calc2);
console.log('_______________________')
console.log('can_access1 = ' + res1)
console.log('can_access2 = ' + res2)

mstr='samir';

s = mstr.split('');
k=s.reverse();
console.log(s[0]);

    const t='1';
    var s='';
for (let i = 1; i <= 64; i++) {
    s = s + t;  
      
}
kk = b2d(s);
console.log(kk);

let a1 = '10010101';
let a2 = '00000111';
let a3 = '11000000'

b_a1 = b2d(a1);
b_a2 = b2d(a2);
b_a3 = b2d(a3);

s_a = b_a1 | b_a2;
s_a3 = b_a1 | b_a2 | b_a3 
b_sa = d2b(s_a);
d_sa = 7 | 149;
bs_a3 = d2b(s_a3);
db_sa = d2b(d_sa)
console.log('a1='+a1+' b_a1='+b_a1);
console.log('a2='+a2+' b_a2='+b_a2);
console.log('s_a='+s_a+' b_sa='+ b_sa);
console.log('d_sa='+d_sa);
console.log('db_sa='+db_sa);
console.log('s_a3='+s_a3);
console.log('bs_a3='+bs_a3);

console.log('-'.padEnd(60,'-'));
let m1 = '01'.padEnd(31,'0');
let m2 = '1'.padEnd(29,'0');

console.log('m1=',m1, b2d(m1), ' length=', m1.length);
console.log('m2=',m2, b2d(m2));
console.log('m1 | m2 = ', d2b(b2d(m1) | b2d(m2)), b2d(m1) | b2d(m2));

