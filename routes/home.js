const express = require("express");
const router = express.Router();


const array = [['1', 'H', 'bg-green'],['18', 'He', 'bg-blue'],['19', 'Li', 'bg-purple'],['20', 'Be', 'bg-pink'],['31', 'B', 'bg-lightyellow'],['32', 'C', 'bg-green'],['33', 'N', 'bg-green'],['34', 'O', 'bg-green'],['35', 'F', 'bg-lightgreen'],['36', 'Ne', 'bg-blue'],
['37', 'Na', 'bg-purple'],['38', 'Mg', 'bg-pink'],['49', 'Al', 'bg-yellow'],['50', 'Si', 'bg-lightyellow'],['51', 'P', 'bg-green'],['52', 'S', 'bg-green'],['53', 'Cl', 'bg-lightgreen'],['54', 'Ar', 'bg-blue'],['55', 'K', 'bg-purple'],['56', 'Ca', 'bg-pink'],['57', 'Sc', 'bg-orange'],
['58', 'Ti', 'bg-orange'],['59', 'V', 'bg-orange'],['60', 'Cr', 'bg-orange'],['61', 'Mn', 'bg-orange'],['62', 'Fe', 'bg-orange'],['63', 'Co', 'bg-orange'],['64', 'Ni', 'bg-orange'],['65', 'Cu', 'bg-orange'],['66', 'Zn', 'bg-orange'],['67', 'Ga', 'bg-yellow'],
['68', 'Ge', 'bg-lightyellow'],['69', 'As', 'bg-lightyellow'],['70', 'Se', 'bg-green'],['71', 'Br', 'bg-lightgreen'],['72', 'Kr', 'bg-blue'],['73', 'Rb', 'bg-purple'],['74', 'Sr', 'bg-pink'],['75', 'Y', 'bg-orange'],['76', 'Zr', 'bg-orange'],['77', 'Nb', 'bg-orange'],['78', 'Mo', 'bg-orange'],
['79', 'Tc', 'bg-orange'],['80', 'Ru', 'bg-orange'],['81', 'Rh', 'bg-orange'],['82', 'Pd', 'bg-orange'],['83', 'Ag', 'bg-orange'],['84', 'Cd', 'bg-orange'],['85', 'In', 'bg-yellow'],['86', 'Sn', 'bg-yellow'],['87', 'Sb', 'bg-lightyellow'],['88', 'Te', 'bg-lightyellow'],
['89', 'I', 'bg-lightgreen'],['90', 'Xe', 'bg-blue'],['91', 'Cs', 'bg-purple'],['92', 'Ba', 'bg-pink'],['130', 'La', 'bg-lightOrange'],['131', 'Ce', 'bg-lightOrange'],['132', 'Pr', 'bg-lightOrange'],['133', 'Nd', 'bg-lightOrange'],['134', 'Pm', 'bg-lightOrange'],['135', 'Sm', 'bg-lightOrange'],
['136', 'Eu', 'bg-lightOrange'],['137', 'Gd', 'bg-lightOrange'],['138', 'Tb', 'bg-lightOrange'],['139', 'Dy', 'bg-lightOrange'],['140', 'Ho', 'bg-lightOrange'],['141', 'Er', 'bg-lightOrange'],['142', 'Tm', 'bg-lightOrange'],['143', 'Yb', 'bg-lightOrange'],['144', 'Lu', 'bg-lightOrange'],
['94', 'Hf', 'bg-orange'],['95', 'Ta', 'bg-orange'],['96', 'W', 'bg-orange'],['97', 'Re', 'bg-orange'],['98', 'Os', 'bg-orange'],['99', 'Ir', 'bg-orange'],['100', 'Pt', 'bg-orange'],['101', 'Au', 'bg-orange'],['102', 'Hg', 'bg-orange'],['103', 'Tl', 'bg-yellow'],['104', 'Pb', 'bg-yellow'],
['105', 'Bi', 'bg-yellow'],['106', 'Po', 'bg-lightyellow'],['107', 'At', 'bg-lightgreen'],['108', 'Rn', 'bg-blue'],['109', 'Fr', 'bg-purple'],['110', 'Ra', 'bg-pink'],['148', 'Ac', 'bg-red'],['149', 'Th', 'bg-red'],['150', 'Pa', 'bg-red'],['151', 'U', 'bg-red'],['152', 'Np', 'bg-red'],
['153', 'Pu', 'bg-red'],['154', 'Am', 'bg-red'],['155', 'Cm', 'bg-red'],['156', 'Bk', 'bg-red'],['157', 'Cf', 'bg-red'],['158', 'Es', 'bg-red'],['159', 'Fm', 'bg-red'],['160', 'Md', 'bg-red'],['161', 'No', 'bg-red'],['162', 'Lr', 'bg-red'],['112', 'Rf', 'bg-orange'],['113', 'Db', 'bg-orange'],
['114', 'Sg', 'bg-orange'],['115', 'Bh', 'bg-orange'],['116', 'Hs', 'bg-orange'],['117', 'Mt', 'bg-orange'],['118', 'Ds', 'bg-orange'],['119', 'Rg', 'bg-orange'],['120', 'Cn', 'bg-orange'],['121', 'Nh', 'bg-yellow'],['122', 'Fl', 'bg-yellow'],['123', 'Mc', 'bg-yellow'],['124', 'Lv', 'bg-yellow'],
['125', 'Ts', 'bg-lightgreen'],['126', 'Og', 'bg-blue'],['93', 'La-Lu', 'bg-lightOrange'],['111', 'Ac-Lr', 'bg-red']];


router.get("/", function (req, res, next) {
  res.render("home", { layout: false, array: array });
});


exports.Router = router;
exports.array = array;
