class Fighter {
	constructor(name, power, health) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;
		console.log(health);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.setDamage(damage);

	}
};