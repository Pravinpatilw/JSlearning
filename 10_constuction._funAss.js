function Bank(bankName,location,ifseCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifseCode=ifseCode;
    this.branchCode=branchCode;
    this.show = function(){
        console.log(`${this.bankName} ${this.lo} this.fullName} ${this.city}`);
    }
}
// Person.prototype.country = "India";

const dhoni = new Person("MS Dhoni", "Ranchi");
dhoni.show();
console.log(dhoni.country);

const gill = new Person("Shubam Gill", "Mumbai");
gill.show();
console.log(gill.country);
    
}