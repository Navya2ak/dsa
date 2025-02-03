function seriesPosition(pos) {
    const array=[0,1]
    for(let i=2;i<=pos;i++)
    {
        array.push(array[i-2]+array[i-1])
    }
    console.log(array[pos])
    return array[pos] 
}

seriesPosition(3) // 0,1,1,2,3,5