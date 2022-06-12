'use strict';

const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){
  const newCat = document.createElement('li');
  newCat.textContent = "polly";
  const cats = document.getElementById('cats');
  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('li');
  newDog.textContent = "whiskey";
   const dogs = document.getElementById('dogs')
   dogs.appendChild(newDog);
  });

const sheepButton = document.getElementById('make-sheep');
sheepButton.addEventListener('click', handleMakingSheep);

  function handleMakingSheep() {
  const newSheep = document.createElement('li');
  newSheep.textContent = "Sheep"; 
  const sheeps = document.getElementById('sheeps'); 
  sheeps.appendChild(newSheep);
  };

const horseButton = document.getElementById('make-horse');
horseButton.addEventListener('click', handleMakingHorses);

function handleMakingHorses(){
  const newHorse = document.createElement('li');
  newHorse.textContent = "Valentine";
  const horses = document.getElementById('horses');
  horses.appendChild(newHorse);
}

const form = document.getElementById('theform')
const label = document.createElement("label");
const input = document.createElement("input");
const submit = document.createElement('input');
const fieldset = document.createElementById('first');
const content = document.createElement('textarea');

label.textContent = 'Topic: '
input.type = "text";
input.id = "title";
input.name = "input";
content.id = "info";
content.name= "content";
submit.type = "submit";
content.rows= "10";
content.cols = "300"


document.fieldset.appendChild(label);
document.fieldset.appendChild(input);
document.fieldset.appendChild(submit);
