const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line

    this.potions = this.potions.map(potion => {
      if (potion === oldName) {
        return newName;
      }
      return potion;
    });

    // Change code above this line
  },
};
