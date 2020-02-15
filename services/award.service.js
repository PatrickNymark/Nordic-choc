
const Award = require('../models/Award');

module.exports = {
  create,
  all,
  remove
}

/**
 * Create award
 * @param {object} awardData a object representing a award
 * @returns a Promise or exception  
 */
async function create(awardData) {
  const award = await Award.findOne({ year: awardData.year, rank: awardData.rank, regiond: awardData.region });
  if(award) throw 'Award "' + awardData.year + ' ' + awardData.rank + '" already exists';
  
  const newAward = new Award(awardData);
  return await newAward.save(); 
}

/**
 * Delete award
 * @param {string} id a string representing a award id
 * @returns a Promise or exception  
 */
async function remove(id) {
    const award = await Award.findOne({ id });
    if(!award) throw 'Award with id "' + id + '" not found';
    
    return await award.remove(); 
  }

/**
 * Get all awards
 * @returns a Promise or exception  
 */
async function all() {
   //ßª return await Award.find({ sort: { year: 1 }});    
    return await Award.find().sort({ year: -1 });    

}

/** 
 * Get awards by year
 * 
*/
async function getByYear() {
    let awards
}