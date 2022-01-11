
class BankAccount:
    # don't forget to add some default values for these parameters!
    int_rate = 0.01
    balance = 0
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self	
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print (self.int_rate, "balance=",self.balance)
        return self
    def yield_interest(self):
        self.balance += self.int_rate
        return self

class User:
    bank_name = "Dojo Credit Union"
    # now our method has 2 parameters!
    def __init__(self , name, email_address):
    	# we assign them accordingly
        self.name = name
        self.email = email_address
    	# the account balance is set to $0
        self.checking = BankAccount(int_rate=0.02, balance=0)
        # adding the deposit method
        self.saving = BankAccount(int_rate=0.05, balance=0)

Michael = User("Michael", "Michael@mail.com")
Jordi = User("Jordi", "Jordi@mail.com")
David = User("David", "David@mail.com")
Michael.checking.deposit(100)
Michael.checking.display_account_info()
Michael.saving.deposit(500)
Michael.saving.display_account_info()