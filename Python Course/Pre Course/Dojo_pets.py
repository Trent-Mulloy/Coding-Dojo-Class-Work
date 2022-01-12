class Ninja:
    def __init__(self , first_name , last_name , treats , pet_food , pet ):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
        	
    def walk(self):
        return self.pet.play()
    def feed(self):
        return self.pet.eat()
    def bathe(self):
        return self.pet.noise()
class Pet:
    def __init__(self,pet):
        self.pet = pet
    def eat(self):
        energy = 5
        return energy 
    def play(self):
        health += 5
        return health
    def noise(self):
        print ("Bark")
        
Jordi = Pet("Jordi")
Trent = Ninja("Trent","M","Bacon","Purina",Jordi) 
Trent.walk
