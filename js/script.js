'use strict';
{
  // ******************************************
  // * SHOW ARTICLE AFTER CLICK OF TITLE LINK *
  // ******************************************

  const titleClickHandler = function (event) {

    event.preventDefault();
    const clickedElement = this;

    // remove class 'active' from all active article links
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    // add class 'active' to the clicked link
    clickedElement.classList.add('active');

    // remove class 'active' from all active articles
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    // get 'href' attribute from the clicked link
    const articleSelector = clickedElement.getAttribute('href');

    // find the correct article using the selector (value of 'href' attribute)
    const targetArticle = document.querySelector(articleSelector);

    // add class 'active' to the correct article
    targetArticle.classList.add('active');

  };

  // *********************
  // * CREATE TITLE LIST *
  // *********************

  const
    optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsListSelector = '.post-tags .list',
    optArticleTagsSelector = '.post-tags .list a', //, .sidebar .tags a
    optArticleAuthorSelector = '.post-author',
    optArticleAuthorLinkSelector = '.post-author a';

  const generateTitleLinks = function (customSelector = '') {

    // remove contents of titleList
    let titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    // for each article
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {
      // get the article id
      const articleId = article.getAttribute('id');

      // find the title element
      // get the title from the title element
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      // create HTML of the link
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      // insert link into titleList
      // titleList.innerHTML = titleList.innerHTML + linkHTML;
      // titleList.insertAdjacentHTML('beforeend', linkHTML);
      html = html + linkHTML;
    }

    // create titleList content
    titleList.innerHTML = html;

    // make title links collection and assign one event-listener to each link
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();

  // *****************************************
  // * GENERATE TAG LINKS UNDER EACH ARTICLE *
  // *****************************************

  const generateTags = function () {

    // find all articles
    const articles = document.querySelectorAll(optArticleSelector);

    // START LOOP: for every article:
    for (let article of articles) {

      // find tags wrapper
      const tagsWrapper = article.querySelector(optArticleTagsListSelector);

      // make html variable with empty string
      let html = '';

      // get tags from data-tags attribute
      const articleTags = article.getAttribute('data-tags');

      // split tags into array
      const articleTagsArray = articleTags.split(' ');

      // START LOOP: for each tag
      for (let tag of articleTagsArray) {
        // generate HTML of the link
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        // add generated code to html variable
        html = html + linkHTML;
        // END LOOP: for each tag
      }
      // insert HTML of all the links into the tags wrapper
      tagsWrapper.innerHTML = html;
      // END LOOP: for every article:
      // NOTE: No spacing between tags! Fixed in .list-horizontal class within style.scss
    }
  };

  generateTags();

  // ************************
  // * HANDLE TAGS CLICKING *
  // ************************

  const tagClickHandler = function (event) {

    // prevent default action for this event
    event.preventDefault();

    // make new constant named "clickedElement" and give it the value of "this"
    const clickedElement = this;

    // make a new constant "href" and read the attribute "href" of the clicked element
    const href = clickedElement.getAttribute('href');

    // make a new constant "tag" and extract tag from the "href" constant
    const tagHref = href.replace('#tag-', '');

    // find all tag links with class active
    const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    // START LOOP: for each active tag link
    for(let activeLink of activeLinks) {
    // remove class active
      activeLink.classList.remove('active');
    // END LOOP: for each active tag link
    }

    // find all tag links with "href" attribute equal to the "href" constant
    const linksWithHref = document.querySelectorAll('a[href="' + href + '"]');

    // START LOOP: for each found tag link
    for (let linkWithHref of linksWithHref) {
    // add class active
      linkWithHref.classList.add('active');

    // END LOOP: for each found tag link
    }
    // execute function "generateTitleLinks" with article selector as argument
    generateTitleLinks('[data-tags~="' + tagHref + '"]');
  };

  const addClickListenersToTags = function () {
    // find all links to tags
    const allLinksToTags = document.querySelectorAll(optArticleTagsSelector);
    // START LOOP: for each link
    for (let link of allLinksToTags) {
    // add tagClickHandler as event listener for that link
      link.addEventListener('click', tagClickHandler);
    // END LOOP: for each link
    }
  };

  addClickListenersToTags();

  // ***************************************************
  // * GENERATE AUTHOR LINK UNDER EACH ARTICLE'S TITLE *
  // ***************************************************

  const generateAuthors = function () {

    // find all articles
    const articles = document.querySelectorAll(optArticleSelector);

    // START LOOP: for every article:
    for (let article of articles) {

      // find Author wrapper
      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      // get author from data-author attribute
      const articleAuthor = article.getAttribute('data-author');
      //console.log(articleAuthor);

      authorWrapper.innerHTML = 'by <a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';

    }
  };

  generateAuthors();

  // ************************
  // * HANDLE TAGS CLICKING *
  // ************************

  const authorClickHandler = function (event) {

    // prevent default action for this event
    event.preventDefault();

    // make new constant named "clickedElement" and give it the value of "this"
    const clickedElement = this;

    console.log('Author link has been clicked!');
    console.log(clickedElement);

    // make a new constant "href" and read the attribute "href" of the clicked element
    const href = clickedElement.getAttribute('href');
    console.log('1 ', href);

    // make a new constant "tag" and extract tag from the "href" constant
    const authorHref = href.replace('#author-', '');
    console.log('2 ', authorHref);

    /*
    // find all author links with class active
    const activeLinks = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(activeLinks);

    // START LOOP: for each active tag link
    for(let activeLink of activeLinks) {
    // remove class active
      activeLink.classList.remove('active');
    // END LOOP: for each active tag link
    }

    // find all author links with "href" attribute equal to the "href" constant
    const linksWithHref = document.querySelectorAll('a[href="' + href + '"]');
    console.log(linksWithHref);

    // START LOOP: for each found author link
    for (let linkWithHref of linksWithHref) {
    // add class active
      linkWithHref.classList.add('active');
      console.log(linkWithHref);
    // END LOOP: for each found tag link
    }

    */
    // execute function "generateTitleLinks" with article selector as argument
    generateTitleLinks('[data-author="' + authorHref + '"]');

    //generateTitleLinks('[data-tags~="' + tagHref + '"]');

  };

  const addClickListenersToAuthors = function () {
    // find all links to tags
    const allLinksToAuthors = document.querySelectorAll(optArticleAuthorLinkSelector);
    // START LOOP: for each link
    for (let link of allLinksToAuthors) {
    // add authorClickHandler as event listener for that link
      link.addEventListener('click', authorClickHandler);
    // END LOOP: for each link
    }
  };

  addClickListenersToAuthors();

}
