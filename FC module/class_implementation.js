class Refrigerator
{
    constructor(brandName, numberofDoor, starRating, color, basePrice, additionalPrice)
    {
        this.brandName = brandName
        this.numberofDoor = numberofDoor
        this.starRating = starRating
        this.color = color
        this.basePrice = basePrice
        this.additionalPrice = additionalPrice
    }

    get TotalPrice()
    {
        return this.completePrice()
    }
    completePrice()
    {
        return this.basePrice + this.additionalPrice
    }
}

const LG = new Refrigerator("LG", 2, 5, "Red",40000, 5000 )         //first object
console.log(LG.TotalPrice)

const Samsung = new Refrigerator("Samsung", 1, 4,"Blue",32000,3000) //second object
console.log(Samsung.TotalPrice)