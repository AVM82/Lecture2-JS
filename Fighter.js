class Fighter {
	constructor(name, power = 1, health = 0) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage = 0) {
		this.health -= damage;
		console.log(`${this.name} was damaged = ${damage} and health = ${this.health}`);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.setDamage(damage);

	}


};
