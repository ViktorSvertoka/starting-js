const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const potionExists = this.potions.some(
      potion => potion.name === newPotion.name,
    );
    if (potionExists) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    } else {
      this.potions.push(newPotion);
    }
  },
  removePotion(potionName) {
    this.potions = this.potions.filter(potion => potion.name !== potionName);
  },
  updatePotionName(oldName, newName) {
    const potion = this.potions.find(potion => potion.name === oldName);
    if (potion) {
      potion.name = newName;
    }
  },
};
