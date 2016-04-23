import DS from 'ember-data';
import Material from '../objects/material';

export default {
  materials: [
    Material.create({ code: 'C',  name: 'carbon', rarity: 'Very Common', score: 1 }),
    Material.create({ code: 'Fe', name: 'iron', rarity: 'Very Common', score: 1 }),
    Material.create({ code: 'Ni', name: 'nickel', rarity: 'Very Common', score: 1 }),
    Material.create({ code: 'P',  name: 'phosphorus', rarity: 'Very Common', score: 1 }),
    Material.create({ code: 'S',  name: 'sulphur', rarity: 'Very Common', score: 1 }),
    Material.create({ code: 'As', name: 'arsenic', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Cr', name: 'chromium', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Ge', name: 'germanium', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Mn', name: 'manganese', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Se', name: 'selenium', rarity: 'Common', score: 2 }),
    Material.create({ code: 'V',  name: 'vanadium', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Zn', name: 'zinc', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Zr', name: 'zirconium', rarity: 'Common', score: 2 }),
    Material.create({ code: 'Cd', name: 'cadmium', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'Hg', name: 'mercury', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'Mo', name: 'molybdenum', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'Nb', name: 'niobium', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'Sn', name: 'tin', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'W',  name: 'tungsten', rarity: 'Rare', score: 3 }),
    Material.create({ code: 'Sb', name: 'antimony', rarity: 'Very Rare', score: 4 }),
    Material.create({ code: 'Po', name: 'polonium', rarity: 'Very Rare', score: 4 }),
    Material.create({ code: 'Ru', name: 'ruthenium', rarity: 'Very Rare', score: 4 }),
    Material.create({ code: 'Tc', name: 'technetium', rarity: 'Very Rare', score: 4 }),
    Material.create({ code: 'Te', name: 'tellurium', rarity: 'Very Rare', score: 4 }),
    Material.create({ code: 'Y',  name: 'yttrium', rarity: 'Very Rare', score: 4 }),
  ],
};

