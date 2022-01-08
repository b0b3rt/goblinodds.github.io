// ARCHETYPES
function heroGen() {
  // DEFINE HEROES

  /**
   * Robert:
   * In general, there isn't a reason to declare these inside of the scope of `heroGen`
   * Since they're never being modified, you can declare them outside of the function
   * Right now, they'll be re-assigned each time `heroGen` is executed
   * In this case it's not a big deal, since the amount of data is relatively tiny
   * But in larger applications, object allocations can add up
   * 
   * Note: if you were to move to a design where you were populating the values for each hero dynamically,
   * it would be appropriate to do it inside the function.  In general shared global state should be avoided
   * unless it's truly immutable (it never changes)
   */
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

  /**
   * Robert:
   * Consider renaming to something a bit more descriptive, like `heroList`
   * Also, if you pull out all the individual hero declarations to global scope, you can pull this out as well
   * Since it's never modified either, only read from
   */
  const hero = [heroReformer, heroHelper, heroAchiever, heroIndividualist, heroInvestigator, heroLoyalist, heroEnthusiast, heroChallenger, heroPeacemaker]

  // Robert: `currentHero` is never being reassigned, so you can also use `const` for the assignment rather than `let`
  // random hero from hero array
  let currentHero = hero[Math.floor(Math.random() * hero.length)];

  // Robert: innerHTML is a bit dangerous to use
  // For header elements you should be able to use the `textContent` property the same way
  document.getElementById('hero').innerHTML = currentHero['archetype']['enneagram'];
  document.getElementById('shadow').innerHTML = currentHero['shadow'];
  document.getElementById('button-designs').style.display = "flex";

  /**
   * Robert:
   * I'm surprised that this works; I thought you needed to do something like `window.selectedHero = currentHero;`
   * Even if it's not strictly necessary I'd still probably go ahead and do it that way
   * As it is, it seems like it's assigning to a variable `selectedHero` which was declared earlier
   * But if someone tries to find it they won't find a delaration site
   * Explicitly saying `window.selectedHero = currentHero;` is a very clear marker about what you're doing
   */
  // declares a global variable that has the value of currentHero
  // so you can use this global variable in other functions
  selectedHero = currentHero;

  /**
   * Robert:
   * Same here; also consider renaming `heroGlobal` to something a bit more descriptive
   */
  heroGlobal = hero;

}


// CHARACTER DESIGNS
function heroDesign() {

  // CHARACTER DESIGNS

  let heroShape1 = selectedHero['archetype']['shape1'];
  let heroShape2;
  let heroShape3;

  /**
   * Robert:
   * If I understand the intention correctly, this can be expressed a little bit more concisely
   * Something like:
   * ```
   * const heroShape2 = heroGlobal.find(
   *  (enneagramHero) => selectedHero.archetype.growth === enneagramHero.archetype.enneagram
   * )?.archetype.shape1;
   * ```
   * 
   * The `find` function on arrays does more or less what it sounds like
   * It finds you the first (in order) item in that array which matches the condition you provide
   * That condition is this: `(enneagramHero) => selectedHero.archetype.growth === enneagramHero.archetype.enneagram`
   * It needs to be a function which returns a boolean (true/false).
   * Returning true ends the search, returning false continues it
   * If the entire array is searched and nothing is found, it returns `undefined`
   * That's what the `?.` at the end is protecting against
   * If you try to access a property of something that ends up being undefined, Javascript will be upset at you and throw an error
   * Using `?.` instead of `.` to access a property will guard against that - it will return `undefined` (or `null`) early
   */
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
  
  /**
   * Robert:
   * Same as above, just with a slightly different comparison function
   */
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

  /**
   * Robert:
   * nitpick: these can all be `const`
   */
  let rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + '1)';

  // find COMPLIMENTARY COLOR for shadow

  let rInvert = 255 - r;
  let gInvert = 255 - g;
  let bInvert = 255 - b;

  let rgbaInvert = 'rgba(' + rInvert + ', ' + gInvert + ', ' + bInvert + ', ' + '1)';

  // SHAPES

  /**
   * Robert:
   * Same comment w.r.t. innerHTML, except for `p` tags I think the property is `innerText`
   */
  document.getElementById('hero-shape1').innerText = 'primary shape: ' + heroShape1;
  document.getElementById('hero-shape2').innerText = 'secondary shape: ' + heroShape2;
  document.getElementById('hero-shape3').innerText = 'tertiary shape: ' + heroShape3; 
  document.getElementById('shadow-shape1').innerText = 'primary shape: ' + heroShape3;
  document.getElementById('shadow-shape2').innerText = 'secondary shape: ' + heroShape1;
  document.getElementById('shadow-shape3').innerText = 'primary shape: ' + heroShape2; 

  // SWATCH colors
  document.getElementById('swatch-hero').style.backgroundColor = rgba;
  document.getElementById('swatch-shadow').style.backgroundColor = rgbaInvert;
  document.getElementById('swatch-hero').style.display = "block";
  document.getElementById('swatch-shadow').style.display = "block";

  /**
   * Robert:
   * I think disabling the button can be handled by setting the `disabled` property to any string value:
   * document.getElementById('button-archetype').disabled = '';
   * 
   * But if you want to leave it enabled and then just have it refresh everything to a new state...
   * One way to do that would be to have the `heroGen` function (which is called when this button is clicked)
   * reset all of the shape & swatch elements to the initial state.
   * That might look something like this:
   * ```
   * document.getElementById('hero-shape1').innerText = null;
   * ...
   * ...
   * 
   * document.getElementById('swatch-hero').style.backgroundColor = null;
   * document.getElementById('swatch-hero').style.display = null;
   * ```
   * 
   * They need to be set to `null` rather than `undefined` because of some weirdness about how HTML attributes work, idk
   * 
   * You could also consider extracting all of that logic into its own function for clarity, called, idk, `reset`
   * And then call it at top of `heroGen`
   */
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