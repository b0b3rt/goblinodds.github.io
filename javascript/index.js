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

CHARACTER DESIGN: SHAPE LANGUAGES
- circle
- triangle
- rectangle

give each archetype a set of 3 symbols (symbols can be duped)
that correspond to attributes...

more ideas to include:

- environments
- plot points a la Joseph Campbell
- character designs:
    - shapes: each character type has a symbol language combining
      circles, rectangles, and triangles, but the stacking can be randomized e.g. reformer has two triangles
      and a circle but any of these could be the head, body, legs)
    - colors: each character type has a symbol language combining some subset of hues, saturations, contrast
      (and randomize which is dominant or randomize from a set)
    - races + species influence if fantasy/sci-fi + cultural garbs

*/