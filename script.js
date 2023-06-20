let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1 
const mainTitle = document.getElementById("main-title");
mainTitle.textContent = "Hello,I'm DOM";



  // Part 2 
  const bodyEl = document.querySelector('body');
  bodyEl.style.backgountColor = 'grey';



  // Part 3
  const favoriteThings = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  favoriteThingsList.removeChild(lastListItem);

  


  // Part 4
  const specialTitle = document.getElementAll('.special-title'){
  for(let i = 0; i < specialTitle.length; i++)
  specialTitle.style.fontsize = '2rem'};
  


  // Part 5
  const pastRaces = document.getElement('Past Races');
  const listItems = pastRacesList.getElementByTagName('li');
  for(let i = 0; i < listItem.length; i++){
    if (listItem.textContent.includes('Chicago')) {
      pastRacesList.removeChild(listItem);
      break;
    }
  }


  // Part 6
  const pastRacesList = document.getElementById('past-races');
  const newCity = 'Washington DC';
  
  const newListItem = document.createElement('li');
  newListItem.textContent = newCity;
  
  pastRacesList.appendChild(newListItem);
  


  // Part 7 
  const blogPostsContainer = document.getElementById('blog-posts');
  
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');

  const heading = document.createElement('div');
  heading.textContent = `Exploring ${newCity};
  
  const paragraph = document.createElement('p');
  paragraph.textContent = `When I visited ${newCity}, I found interesting buildings.`;

 newBlogPost.appendChild(heading);
 newBlogPost.append(paragraph);
 blog PostsContainer.appendChild(newBlogPost);
  
  
  
  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);
  


  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach(blogPost => {
    blogPost.addEventListener('mouseout, () => {
                              blogPost.classList.toggle('purple');
  });

  blogPost.addEventListener( 'mouseenter',() => {
    blogPost.classList.toggle('red');
  });
});




});
