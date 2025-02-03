function checkPalindrome(str)
{
 const res=str==str.split("").reverse().join("")? true:false
 console.log(res)
 return res
}

checkPalindrome("mam")