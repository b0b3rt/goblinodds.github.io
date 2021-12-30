function heroGen() {
  
  const hero = [
    {archetype: 'The Reformer',
    shadow: 'The Zealot'},
    {archetype: 'The Helper',
    shadow: 'The Martyr'},
    {archetype: 'The Achiever',
    shadow: 'The Grasper'},
    {archetype: 'The Individualist',
    shadow: 'The Recluse'},
    {archetype: 'The Investigator',
    shadow: 'The Conspiracist'},
    {archetype: 'The Loyalist',
    shadow: 'The Flagellant'},
    {archetype: 'The Enthusiast',
    shadow: 'The Addict'},
    {archetype: 'The Challenger',
    shadow: 'The Megalomaniac'},
    {archetype: 'The Peacemaker',
    shadow: 'The Appeaser'}
  ]

  let currentHero = hero[Math.floor(Math.random() * hero.length)];

  document.getElementById('hero').innerHTML = currentHero['archetype'];
  document.getElementById('shadow').innerHTML = currentHero['shadow'];
  
}


/*

more ideas to include

*/