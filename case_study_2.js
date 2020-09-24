
const entities = {
    fund: {
        1: { id: 1, name: 'VCPT Ventures III' },
        2: { id: 2, name: 'Huron Oak Equity V' },
        3: { id: 3, name: 'Pacific Capital Partners I' },
    },
    company: {
        15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
        23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
        52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
        63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
    },
}

// Prompt
// Referring to the javascript object above, please write functions or a utility class that will: 

// 1.) Return an array of fund objects in alphabetical order.
    const alphabetizeFunds=()=>{
        const arr=Object.values(entities.fund).sort((a,b)=>{
            if(a.name>b.name) return 1
            if(a.name<b.name)return -1
            return 0
        })
        return arr
    }

// 2.) Return an array of companies that belong to fund 2.
    const companiesOfFund = (fund_id)=>Object.values(entities.company).filter(company=>company.fund_id===fund_id)
// 3.) Return an array of fund names with an exited company.
    const exitedCompanyFundNames=()=>{
        const exitedCompanies = Object.values(entities.company).filter(company=>company.exited===true)
        notUniqueArr=exitedCompanies.map(company=>entities.fund[company.fund_id])
        return notUniqueArr.filter((fund,index,arr)=>arr.indexOf(fund)===index)
    }

