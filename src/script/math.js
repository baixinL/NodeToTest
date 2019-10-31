module.exports={
    add:(...args)=>{
        return args.reduce((total,curr,index)=>{
            return total + curr
        })
    },

    mul:(...args)=>{
        return args.reduce((total,curr)=>{
            return total * curr
        })
    },

    div:(...args)=>{
        return args.reduce((total,curr)=>{
            return total / curr
        })
    }
}
