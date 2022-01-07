// ARCHETYPES
function heroGen() {

  // DEFINE HEROES

  const heroReformer = {
    archetype: {
      enneagram: 'The Reformer',
      shape1: 'rectangle',
      growth: 'The Enthusiast',
      stress: 'The Individualist'
      },
    shadow: 'The Zealot'
  };

  const heroHelper = {
    archetype: {
      enneagram: 'The Helper',
      shape1: 'circle',
      growth: 'The Individualist',
      stress: 'The Challenger'
      },
    shadow: 'The Martyr'
  };
  
  const heroAchiever = {
    archetype: {
      enneagram: 'The Achiever',
      shape1: 'rectangle',
      growth: 'The Loyalist',
      stress: 'The Peacemaker'
    },
    shadow: 'The Grasper'
  };

  const heroIndividualist = {
    archetype: {
      enneagram: 'The Individualist',
      shape1: 'triangle',
      growth: 'The Reformer',
      stress: 'The Helper'
      },
    shadow: 'The Recluse'
  };  

  const heroInvestigator = {
    archetype: {
      enneagram: 'The Investigator',
      shape1: 'rectangle',
      growth: 'The Challenger',
      stress: 'The Enthusiast'
      },
    shadow: 'The Conspiracist'
  };  

  const heroLoyalist = {
    archetype: {
      enneagram: 'The Loyalist',
      shape1: 'circle',
      growth: 'The Peacemaker',
      stress: 'The Achiever'
      },
    shadow: 'The Flagellant'
  };  

  const heroEnthusiast = {
    archetype: {
      enneagram: 'The Enthusiast',
      shape1: 'triangle',
      growth: 'The Investigator',
      stress: 'The Reformer'
      },
    shadow: 'The Addict'
  };  
  
  const heroChallenger = {
    archetype: {
      enneagram: 'The Challenger',
      shape1: 'triangle',
      growth: 'The Helper',
      stress: 'The Investigator'
      },
    shadow: 'The Megalomaniac'
  };  
  
  const heroPeacemaker = {
    archetype: {
      enneagram: 'The Peacemaker',
      shape1: 'circle',
      growth: 'The Achiever',
      stress: 'The Loyalist'
      },
    shadow: 'The Appeaser'
  };  

  const hero = [heroReformer, heroHelper, heroAchiever, heroIndividualist, heroInvestigator, heroLoyalist, heroEnthusiast, heroChallenger, heroPeacemaker]

  // random hero from hero array
  let currentHero = hero[Math.floor(Math.random() * hero.length)];

  document.getElementById('hero').innerHTML = currentHero['archetype']['enneagram'];
  document.getElementById('shadow').innerHTML = currentHero['shadow'];
  document.getElementById('button-designs').style.display = "flex";

  // declares a global variable that has the value of currentHero
  // so you can use this global variable in other functions
  selectedHero = currentHero

}


// CHARACTER DESIGNS
function heroDesign() {

  // CHARACTER DESIGNS

  let heroShape1 = selectedHero['archetype']['shape1'];
  let heroShape2;
  let heroShape3;

  // iterates over heroes to find a hero whose enneagram matches the current hero's direction of growth
  // encodes that hero's primary shape to the 2ndary shape variable
  for (let i = 0; i < hero.length; i++) {
    for (let key in hero) {
      if (hero[i]['archetype']['enneagram'] === selectedHero['archetype']['growth']) {
        heroShape2 = hero[i]['archetype']['shape1'];
        break;
      }
    }
  }
  
  // iterates over heroes to find a hero whose enneagram matches the current hero's direction of stress
  // encodes that hero's primary shape to the 3tiary shape variable
  for (let i = 0; i < hero.length; i++) {
    for (let key in hero) {
      if (hero[i]['archetype']['enneagram'] === selectedHero['archetype']['stress']) {
        heroShape3 = hero[i]['archetype']['shape1'];
        break;
      }
    }
  }
/*
  // CHARACTER COLOR SCHEMES
  // **** BREAKS ARCHETYPES BUTTON

  let r = 0;
  let g = 0;
  let b = 0;

  // put below into an if statement about how
  // if selectedHero is x then math.random for the range for the relevant hero type
  // so it adds to the 0 

  let heroR = Math.floor(Math.random() * 255;
  let heroG = Math.floor(Math.random() * 255;
  let heroB = Math.floor(Math.random() * 255;


  // something that takes these into the rbga code
  // use getElementByID('id').style.display = "blahblah"; to change color
*/
  document.getElementById('hero-shape1').innerHTML = 'primary shape: ' + heroShape1;
  document.getElementById('hero-shape2').innerHTML = 'secondary shape: ' + heroShape2;
  document.getElementById('hero-shape3').innerHTML = 'tertiary shape: ' + heroShape3; 
  document.getElementById('shadow-shape1').innerHTML = 'primary shape: ' + heroShape3;
  document.getElementById('shadow-shape2').innerHTML = 'secondary shape: ' + heroShape1;
  document.getElementById('shadow-shape3').innerHTML = 'primary shape: ' + heroShape2; 

  document.getElementById('swatch-hero').style.display = "block";
  document.getElementById('swatch-shadow').style.display = "block";

  document.getElementById('button-archetype').style.pointerEvents = "none";
  document.getElementById('button-archetype').style.opacity = "0.5";


}

// make SEPARATE BUTTONS for things you want to be able to roll separately
// figure out shape language visualization

/*

COLORS
0 - 255 in rgba
assign a range for each r g b
pick random #s for each from range

CHARACTER DESIGN: SHAPE LANGUAGES

give each hero a set of 3 symbols (symbols can be duped)
that correspond to attributes...

shadow's shape1 is in direction of stress

maybe use directions of growth and stress for shape language?
ie central shape for each main one and secondary shapes come from directions of growth/stress

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