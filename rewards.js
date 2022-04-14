const record = {
    Janurary:{
        1:123,
        2:215,
        3:313,
        4:51,
        6:72,
        7:93,
        8:121,
        9:620,
        10:1210
    },
    Feburary:{
        1:312,
        2:55,
        3:132,
        4:921,
        6:321,
        7:344,
        8:112,
        9:322,
        10:555
    },
    March:{
        1:322,
        2:111,
        3:155,
        4:60,
        6:311,
        7:222,
        8:133,
        9:324,
        10:515
    }
}
const calculateRewards=(record)=>{
    let ans = {}
    Object.keys(record).map((month)=>{
        let monlyRewards=0
        const monthlyData= record[month]
        Object.keys(monthlyData).map((ele)=>{
            const purchase= monthlyData[ele]
            if(purchase>50&&purchase<=100){
                monlyRewards+= purchase-50
            }else if(purchase>100){
                monlyRewards+= 50 + 2*(purchase-100)
            }
        })
        ans[month]=monlyRewards
    })
    return ans
}

console.log(calculateRewards(record))
