function makeABalance(initial){
	account{};
	account.balance=initial;
	account.withdraw=withdraw;
	account.deposit=deposit;
	account.displayBalance=displayBalance;
	return account
}
var withdraw=function(amount){
	if(this.balance>=amount){
		this.balance=this.balance-amount;
	 return "your balance is "+" "+ this.balance;
    } 
     return "your balance is isufficient" ;
}

var deposit=function(amount){
	this.balance=this.balance+amount;
	return "your balance is"+" "+this.balance;
}

var displayBalance=function(){
	return "your balance is" + this.balance;
}
