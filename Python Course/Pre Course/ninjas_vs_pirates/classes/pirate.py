class Pirate:

    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.speed = 2
        self.health = 100

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack ( self , ninja ):
        ninja.health -= self.strength - ninja.speed
        return self
 
