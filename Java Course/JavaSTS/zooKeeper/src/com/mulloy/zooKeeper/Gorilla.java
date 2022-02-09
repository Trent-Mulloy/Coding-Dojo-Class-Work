package com.mulloy.zooKeeper;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		this.energy -= 5;
		System.out.println("Barrel thrown!");
	}
	
	public void eatBanana() {
		this.energy += 10;
		System.out.println("Yummy!");
	}
	
	public void climbTree() {
		this.energy -= 10;
		System.out.println("King Of The World!!");
	}

}

