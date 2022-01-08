// ARCHETYPES
function heroGen() {

  // DEFINE HEROES

  const heroReformer = {
    archetype: {
      enneagram: 'The Reformer',
      shape1: 'rectangle',
      growth: 'The Enthusiast',
      stress: 'The Individualist',
      dominantColor: 'blue'
    },
    shadow: 'The Zealot'
  };

  const heroHelper = {
    archetype: {
      enneagram: 'The Helper',
      shape1: 'circle',
      growth: 'The Individualist',
      stress: 'The Challenger',
      dominantColor: 'green'
    },
    shadow: 'The Martyr'
  };
  
  const heroAchiever = {
    archetype: {
      enneagram: 'The Achiever',
      shape1: 'rectangle',
      growth: 'The Loyalist',
      stress: 'The Peacemaker',
      dominantColor: 'red'
    },
    shadow: 'The Grasper'
  };

  const heroIndividualist = {
    archetype: {
      enneagram: 'The Individualist',
      shape1: 'triangle',
      growth: 'The Reformer',
      stress: 'The Helper',
      dominantColor: 'green'
    },
    shadow: 'The Recluse'
  };  

  const heroInvestigator = {
    archetype: {
      enneagram: 'The Investigator',
      shape1: 'rectangle',
      growth: 'The Challenger',
      stress: 'The Enthusiast',
      dominantColor: 'blue'
    },
    shadow: 'The Conspiracist'
  };  

  const heroLoyalist = {
    archetype: {
      enneagram: 'The Loyalist',
      shape1: 'circle',
      growth: 'The Peacemaker',
      stress: 'The Achiever',
      dominantColor: 'blue'
    },
    shadow: 'The Flagellant'
  };  

  const heroEnthusiast = {
    archetype: {
      enneagram: 'The Enthusiast',
      shape1: 'triangle',
      growth: 'The Investigator',
      stress: 'The Reformer',
      dominantColor: 'red'
    },
    shadow: 'The Addict'
  };  
  
  const heroChallenger = {
    archetype: {
      enneagram: 'The Challenger',
      shape1: 'triangle',
      growth: 'The Helper',
      stress: 'The Investigator',
      dominantColor: 'red'
    },
    shadow: 'The Megalomaniac'
  };  
  
  const heroPeacemaker = {
    archetype: {
      enneagram: 'The Peacemaker',
      shape1: 'circle',
      growth: 'The Achiever',
      stress: 'The Loyalist',
      dominantColor: 'green'
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
  selectedHero = currentHero;

  heroGlobal = hero;

}


// CHARACTER DESIGNS
function heroDesign() {

  // CHARACTER DESIGNS

  let heroShape1 = selectedHero['archetype']['shape1'];
  let heroShape2;
  let heroShape3;

  // iterates over heroes to find a hero whose enneagram matches the current hero's direction of growth
  // encodes that hero's primary shape to the 2ndary shape variable
  for (let i = 0; i < heroGlobal.length; i++) {
    for (let key in heroGlobal) {
      if (heroGlobal[i]['archetype']['enneagram'] === selectedHero['archetype']['growth']) {
        heroShape2 = heroGlobal[i]['archetype']['shape1'];
        break;
      }
    }
  }
  
  // iterates over heroes to find a hero whose enneagram matches the current hero's direction of stress
  // encodes that hero's primary shape to the 3tiary shape variable
  for (let i = 0; i < heroGlobal.length; i++) {
    for (let key in heroGlobal) {
      if (heroGlobal[i]['archetype']['enneagram'] === selectedHero['archetype']['stress']) {
        heroShape3 = heroGlobal[i]['archetype']['shape1'];
        break;
      }
    }
  }

  // CHARACTER COLOR SCHEMES

  let r = 0;
  let g = 0;
  let b = 0;
  let dominantColor = selectedHero['archetype']['dominantColor'];

  // DEFINE randomized RGB values based on ENNEAGRAM
 
  if (dominantColor === 'blue') {   
    b = Math.floor(Math.random() * 255);
    r = Math.floor(Math.random() * b);
    g = Math.floor(Math.random() * b);
  }

  else if (dominantColor === 'red') {
    r = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * r);
    g = Math.floor(Math.random() * r);
  }

  else {
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * g);
    r = Math.floor(Math.random() * g);
  }

  let rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + '1)';

  // find COMPLIMENTARY COLOR for shadow

  let rInvert = 255 - r;
  let gInvert = 255 - g;
  let bInvert = 255 - b;

  let rgbaInvert = 'rgba(' + rInvert + ', ' + gInvert + ', ' + bInvert + ', ' + '1)';

  // SHAPES

  document.getElementById('hero-shape1').innerHTML = 'primary shape: ' + heroShape1;
  document.getElementById('hero-shape2').innerHTML = 'secondary shape: ' + heroShape2;
  document.getElementById('hero-shape3').innerHTML = 'tertiary shape: ' + heroShape3; 
  document.getElementById('shadow-shape1').innerHTML = 'primary shape: ' + heroShape3;
  document.getElementById('shadow-shape2').innerHTML = 'secondary shape: ' + heroShape1;
  document.getElementById('shadow-shape3').innerHTML = 'primary shape: ' + heroShape2; 

  // SWATCH colors
  document.getElementById('swatch-hero').style.backgroundColor = rgba;
  document.getElementById('swatch-shadow').style.backgroundColor = rgbaInvert;
  document.getElementById('swatch-hero').style.display = "block";
  document.getElementById('swatch-shadow').style.display = "block";

  // lock out of GENERATE ARCHETYPES button
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