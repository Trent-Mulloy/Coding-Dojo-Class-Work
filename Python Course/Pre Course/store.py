class Store:
    def __init__(self, storename = "Bobs Store", plist = []):
        self.storename = storename
        self.plist = plist
    def add_product(self, new_product):
        self.plist.append(new_product)
        return self.plist
    def Info(self):
        print (self.storename)
        output = ""
        for i in range(len (self.plist)): 
            output += (f"{self.plist[i].name} = {self.plist[i].price},") 
        print (output)
    def sell_product(self, id):
        J = self.plist[id]
        self.plist.remove(J)
    def inflation(self, percent_change):
        for i in range(len (self.plist)):
            self.plist[i].price = self.plist[i].price * percent_change
        return self
    def discount(self, percent_change):
        for i in range(len (self.plist)):
            self.plist[i].price = self.plist[i].price / percent_change
        return self

class Product:
    def __init__(self, name, price, catagory):
        self.name = name
        self.price = price
        self.catagory = catagory
    def update_price(self, percent_change, is_increased):
        if (is_increased == True):
            self.price = self.price * percent_change
            return self
        self.price = self.price / percent_change
        return self
    def Print_info(self):
        print (f"{self.name} + {str(self.price)}  + {self.catagory}")
broc = Product ("Broccoli", 10.00, "Veggie")
ora = Product ("orange", 5.00, "Fruit")
stk = Product("Steak", 20, "Meat")
store = Store()

store.Info()
store.add_product(broc)
store.add_product(ora)
store.add_product(stk)
store.Info()
stk.update_price(5,True)
store.Info()
store.sell_product(1)
store.Info()
store.inflation(4)
store.Info()
store.discount(2)
store.Info()