//Overriding.ts

class BankCentral
{
    rateofInterest:number=0;

    ReturofInvestment():number
    {
        return this.rateofInterest;
    }
}

class bankX extends BankCentral
{
    ReturofInvestment():number //overriding, name and return type is same, return value is different
    {
        return 10.5;
    }
}


class bankY extends BankCentral
{
    ReturofInvestment():number //overriding, name and return type is same, return value is different
    {
        return 12.5;
    }
}



var x=new bankX();
console.log(x.ReturofInvestment());

var y=new bankY();
console.log(y.ReturofInvestment());