{
  'use strict';

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - S H O W   A R T I C L E - - - - -
  // - - - - A F T E R   C L I C K I N G - - - -
  // - - - - R E S P E C T I V E   L I N K - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  const titleClickHandler = function(event) {
    event.preventDefault(); // Do not jump to #
    const clickedElement = this;
    //console.log('Link was clicked!');
    //remove class 'active' from all article links
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    //add class 'active' to the clicked link
    clickedElement.classList.add('active');
    //console.log('clickedElement:', clickedElement);

    //remove class 'active' from all articles
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    //get 'href' attribute from the clicked link
    const articleSelector = clickedElement.getAttribute('href');
    //console.log('attribute of clicked element: ', articleSelector);

    //find the correct article using the selector (value of 'href' attribute)
    const targetArticle = document.querySelector(articleSelector);
    //console.log('target article: ', targetArticle);

    //add class 'active' to the correct article
    targetArticle.classList.add('active');
    //console.log('target article:', targetArticle);
  };

  // - - - - - - - - - - - - - - - - - - - - - -
  // - -  C R E A T E   T I T L E   L I S T  - -
  // - - - - - - - - - - - - - - - - - - - - - -

  //tags & authors click handler
  const
    optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks() {

    //remove contents of titleList
    let titleList = document.querySelector(optTitleListSelector);
    //console.log('titleList: ', titleList.innerHTML);
    titleList.innerHTML = '';
    //console.log('titleList: ', titleList.innerHTML);

    //for each article
    const articles = document.querySelectorAll(optArticleSelector);
    //console.log('articles: ', articles);

    let html = '';

    for(let article of articles) {
      //get the article id
      const articleId = article.getAttribute('id');
      //console.log('articleId =', articleId);

      //find the title element
      //& get the title from the title element
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //console.log('articleTitle =', articleTitle);

      //create HTML of the link
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      //console.log('linkHTML =', linkHTML);

      //insert link into titleList
      //titleList.innerHTML = titleList.innerHTML + linkHTML;
      //titleList.insertAdjacentHTML('beforeend', linkHTML);
      html = html + linkHTML;
      //console.log('html =', html);
    }

    //create titleList content
    titleList.innerHTML = html;

    //Make title links collection and assign one event-listener to each link
    const links = document.querySelectorAll('.titles a');
    //console.log('links =', links)
    for(let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - C O M M A N D S - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  generateTitleLinks();

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - G E N E R A T E   T A G S - - - - -
  // - - - F O R   E A C H   A R T I C L E - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  function generateTags(){

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    //console.log('articles =', articles);

    /* START LOOP: for every article: */
    for (let article of articles) {
      //console.log('article =', article);

      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      //console.log('tagsWrapper =', tagsWrapper);

      /* make html variable with empty string */
      let html = '';
      //console.log('html =', html);

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('articleTags =', articleTags);

      /* split tags into array */

      /* START LOOP: for each tag */

        /* generate HTML of the link */

        /* add generated code to html variable */

      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
    }
  }

  generateTags();
}
