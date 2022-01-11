class User:
    bank_name = "Dojo Credit Union"
    # now our method has 2 parameters!
    def __init__(self , name, email_address):
    	# we assign them accordingly
        self.name = name
        self.email = email_address
    	# the account balance is set to $0
        self.account_balance = 0
        # adding the deposit method
    def make_deposit(self, amount):	
    	self.account_balance += amount
        return self	
    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print (self.name, "balance=",self.account_balance)
        return self
    def transfer_money(self, amount, target):
        self.account_balance -= amount
        target.account_balance += amount
        return self


Michael = User("Michael", "Michael@mail.com")
Jordi = User("Jordi", "Jordi@mail.com")
David = User("David", "David@mail.com")
Michael.make_deposit(100).make_deposit(500).make_deposit(200).make_withdrawl(100).display_user_balance()

Jordi.make_deposit(100).make_deposit(200).make_withdrawl(100).display_user_balance()

David.make_deposit(200).make_withdrawl(50).make_withdrawl(50).display_user_balance()

Michael.transfer_money(500, David)
Michael.display_user_balance()
David.display_user_balance()