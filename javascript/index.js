function majorArcanaGen() {
  
  const majorArcana = [
    'The Fool',
    'The Magician',
    'The High Priestess',
    'The Empress',
    'The Emperor',
    'The Hierophant',
    'The Lovers',
    'The Chariot',
    'Justice',
    'The Hermit',
    'Wheel of Fortune',
    'Strength',
    'The Hanged Man',
    'Death',
    'Temperance',
    'The Devil',
    'The Tower',
    'The Star',
    'The Moon',
    'The Sun',
    'Judgement',
    'The World'
  ]

  let currentArcana = majorArcana[Math.floor(Math.random() * majorArcana.length)];
                  
  document.getElementById('major-arcana').innerHTML = currentArcana;
  
}