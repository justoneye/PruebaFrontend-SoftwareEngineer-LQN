/**
 * Pokemon.js
 * 
 * Take the selection of 70 English Pokemon names and generate the/a sequence with the highest possible number of Pokemon names where the subsequent name starts with the final letter of the preceding name. 
 *
 * Modify from: https://titanwolf.org/Network/Articles/Article?AID=792320bd-3284-4c34-8368-434361336878#gsc.tab=0 
 */

const pokelist = ["audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask"]; 

const endsWith = word => word[word.length - 1];

const getCandidates = (words, used) => words.filter(e => !used.includes(e));

const buildLookup = words => {
  const lookup = new Map();
  words.forEach(e => {
    const start = e[0];
    lookup.set(start, [...(lookup.get(start) || []), e]);
  });

  return lookup;
};
  
const findPaths = names => {
const lookup = buildLookup(names);
  
let highNum = 0;
let highPaths = [];
  
const parseResult = arr => {
  if (typeof arr[0] === 'object') 
  {
    arr.forEach(el => parseResult(el))
  } 
  else {
    if (arr.length > highNum) {
      highNum = arr.length;
      highPaths = [arr];
    }
      
    if (arr.length === highNum) {
      highPaths.push(arr)
    }
  }
  };
  
  const searchWords = (word, res) => {
    const cs = getCandidates(lookup.get(endsWith(word)) || [], res);
    return cs.length ? cs.map(e => searchWords(e, [...res, e])) : res;
  };
  
  names.forEach(word => {
    const res = searchWords(word, [word]);
    parseResult(res);
  });
 
  console.log('High Path:', highNum);
};
 
findPaths(pokelist);
