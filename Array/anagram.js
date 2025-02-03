function checkAnagram(str1,str2) {
    if(str1.length!=str2.length) return false
    const isAnagram=str1.split("").sort().join("")==str2.split("").sort().join("")
    return isAnagram
}
console.log(checkAnagram("amsa","mama"))