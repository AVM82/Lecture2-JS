class Fighter {
	constructor(name, power, health) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;//check without this
		console.log(health);
	}

	hit(enemy, point) {
		let damage = point * enemy.power;
		enemy.setDamage(damage);

	}
};
