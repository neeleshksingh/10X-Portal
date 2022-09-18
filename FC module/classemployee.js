class Company
{
    constructor(salaries, bonus, chairs, table, ac , electricityBill)
    {
        this.salaries = salaries
        this.bonus = bonus
        this.chairs = chairs
        this.table = table
        this.ac = ac 
        this.electricityBill = electricityBill
    }

    get TotalCost()
    {
        return this.InitialCost()
    }
    InitialCost()
    {
        let SalaryCost = this.totalSalaries()
        let infrastructureCost = this.totalInfrastructure()
        let ElectricityBill = this.totalElectricityBill()
        return SalaryCost + infrastructureCost + ElectricityBill
    }
    totalSalaries()
    {
        let total = 0
        for(let i =0;i<this.salaries.length;i++)
        {
            total = total + this.salaries[i] + this.bonus
        }
        return total
    }

    totalInfrastructure()
    {
        let total = 0
        total = this.chairs + this.ac + this.table
        return total
    }
    totalElectricityBill()
    {
        let discount = 1000
        return this.electricityBill - discount
    }
}

let salaries = [23000, 30000,28000, 40000, 10000]
const Infosys = new Company(salaries,5000,50000,30000,200000,100000)
console.log(Infosys.TotalCost)