// Comment simulation
const comment_template = document.getElementById('comment_template');
const comment_section = document.querySelector('.commets');
console.log(comment_template)
const comment = comment_template.content.cloneNode(true);
comment_section.appendChild(comment); 


//button functionality 
const comment_button = document.querySelector('.comment_button button');

comment_button.addEventListener('click', ()=>{
  const newcomment  = comment_template.content.cloneNode(true);
  const time  = newcomment.querySelector('legend'); 
  time.textContent = "1 second ago";
  const text = newcomment.querySelector('p');
  text.textContent = document.getElementById('card_input').value; 
  const user  = newcomment.querySelector('figcaption'); 
  user.textContent = 'Your user name';
  comment_section.appendChild(newcomment);
})
