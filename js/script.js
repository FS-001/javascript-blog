{

  'use strict';

  /* Titles Click Handler */

  const titleClickHandler = function(event) {
    event.preventDefault(); // Do not jump to #
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('attribute of clicked element: ', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log('target article: ', targetArticle);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
    console.log('target article:', targetArticle);
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
  /*##############################*/
  /* tags & authors click handler */
  /*##############################*/
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks() {

    /* [DONE] remove contents of titleList */
    let titleList = document.querySelector(optTitleListSelector);
    console.log('titleList: ', titleList);
    titleList.innerHTML = '';

    /* [IN PROGRESS] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('articles: ', articles);

    for(let article of articles) {
      /* get the article id */
      const articleId = article.getAttribute('id');
      console.log('article ID: ', articleId);

      /* find the title element */
      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('article title: ', articleTitle);

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into titleList */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
    }

  }

  generateTitleLinks();
}