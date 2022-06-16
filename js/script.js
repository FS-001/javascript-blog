{

'use strict';

// - - - - - - - - - - - - - - - - - - - - - -
// - - - - - S H O W   A R T I C L E - - - - -
// - - - - A F T E R   C L I C K I N G - - - -
// - - - - R E S P E C T I V E   L I N K - - -
// - - - - - - - - - - - - - - - - - - - - - -

// - - - - - D E C L A R A T I O N S - - - - -

const titleClickHandler = function(event) {
  event.preventDefault(); // Do not jump to #
  const clickedElement = this;
  console.log('Link was clicked!');

  // [DONE] remove class 'active' from all article links
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  
  // [DONE] add class 'active' to the clicked link
  clickedElement.classList.add('active');
  //console.log('clickedElement:', clickedElement);

  // [DONE] remove class 'active' from all articles
  const activeArticles = document.querySelectorAll('.posts .post.active');

  for(let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  // [DONE] get 'href' attribute from the clicked link
  const articleSelector = clickedElement.getAttribute('href');
  //console.log('attribute of clicked element: ', articleSelector);

  // [DONE] find the correct article using the selector (value of 'href' attribute)
  const targetArticle = document.querySelector(articleSelector);
  //console.log('target article: ', targetArticle);

  // [DONE] add class 'active' to the correct article
  targetArticle.classList.add('active');
  //console.log('target article:', targetArticle);
}







// - - - - - - - - - - - - - - - - - - - - - -
// - -  C R E A T E   T I T L E   L I S T  - -
// - - - - - - - - - - - - - - - - - - - - - -

// - - - - - D E C L A R A T I O N S - - - - -

// tags & authors click handler
const
  optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {

  // [DONE] remove contents of titleList
  let titleList = document.querySelector(optTitleListSelector);
//  console.log('titleList: ', titleList.innerHTML);
  titleList.innerHTML = '';
//  console.log('titleList: ', titleList.innerHTML);

  // [DONE] for each article
  const articles = document.querySelectorAll(optArticleSelector);
//  console.log('articles: ', articles);

// LAST COMMIT
  let html = '';
// LAST COMMIT


  for(let article of articles) {
    // get the article id
    const articleId = article.getAttribute('id');
//    console.log('articleId =', articleId);

    // find the title element
    // get the title from the title element
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
//    console.log('articleTitle =', articleTitle);

    // create HTML of the link
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//    console.log('linkHTML =', linkHTML);

    // insert link into titleList
//    titleList.innerHTML = titleList.innerHTML + linkHTML;
    // LAST COMMIT
    // titleList.insertAdjacentHTML('beforeend', linkHTML);
    html = html + linkHTML;
    // LAST COMMIT
    // console.log('html =', html);
  }


  //console.log('titleList.innerHTML', titleList);
  // LAST COMMIT
  titleList.innerHTML = html;
  // console.log('titleList.innerHTML', titleList);
  // LAST COMMIT

// - - - - - - - C O M M A N D S - - - - - - -

// Make title links collection and assign one event-listener to each link
const links = document.querySelectorAll('.titles a');
console.log('links =', links)
for(let link of links) {
  link.addEventListener('click', titleClickHandler);
}





}

// - - - - - - - C O M M A N D S - - - - - - -

  generateTitleLinks();




}