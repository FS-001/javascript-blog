'use strict';
{
  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - S H O W   A R T I C L E - - - - -
  // - - - - A F T E R   C L I C K I N G - - - -
  // - - - - R E S P E C T I V E   L I N K - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  const titleClickHandler = function (event) {
    event.preventDefault(); // Do not jump to #
    const clickedElement = this;

    //remove class 'active' from all active article links
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    //add class 'active' to the clicked link
    clickedElement.classList.add('active');

    //remove class 'active' from all articles
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    //get 'href' attribute from the clicked link
    const articleSelector = clickedElement.getAttribute('href');

    //find the correct article using the selector (value of 'href' attribute)
    const targetArticle = document.querySelector(articleSelector);

    //add class 'active' to the correct article
    targetArticle.classList.add('active');
  };

  // - - - - - - - - - - - - - - - - - - - - - -
  // - -  C R E A T E   T I T L E   L I S T  - -
  // - - - - - - - - - - - - - - - - - - - - - -

  const
    optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsListSelector = '.post-tags .list',
    optArticleTagsSelector = '.post-tags .list a'; //, .sidebar .tags a

  const generateTitleLinks = function (customSelector = '') {

    //remove contents of titleList
    let titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    //for each article
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {
      //get the article id
      const articleId = article.getAttribute('id');

      //find the title element
      //& get the title from the title element
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      //create HTML of the link
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      //insert link into titleList
      //titleList.innerHTML = titleList.innerHTML + linkHTML;
      //titleList.insertAdjacentHTML('beforeend', linkHTML);
      html = html + linkHTML;
    }

    //create titleList content
    titleList.innerHTML = html;

    //Make title links collection and assign one event-listener to each link
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - - - C O M M A N D S - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  generateTitleLinks();

  /* START LINE OF COMMENT OUT

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - G E N E R A T E   T A G S - - - - -
  // - - - F O R   E A C H   A R T I C L E - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  const generateTags = function () {

    // find all articles
    const articles = document.querySelectorAll(optArticleSelector);
    //console.log('articles =', articles);

    // START LOOP: for every article:
    for (let article of articles) {
      //console.log('article =', article);

      // find tags wrapper
      const tagsWrapper = article.querySelector(optArticleTagsListSelector);
      //console.log('tagsWrapper =', tagsWrapper);
      // & remove sample links
      //tagsWrapper.innerHTML = '';
      //console.log('tagsWrapper =', tagsWrapper);

      // make html variable with empty string
      let html = '';
      //console.log('html =', html);

      // get tags from data-tags attribute
      const articleTags = article.getAttribute('data-tags');
      //console.log('articleTags =', articleTags);

      // split tags into array
      const articleTagsArray = articleTags.split(' ');
      //console.log('articleTagsArray =', articleTagsArray);

      // START LOOP: for each tag
      for (let tag of articleTagsArray) {
        // generate HTML of the link
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        //console.log('linkHTML', linkHTML);

        // add generated code to html variable
        html = html + linkHTML;
        //console.log('html', html);
        // END LOOP: for each tag
      }
      // insert HTML of all the links into the tags wrapper
      tagsWrapper.innerHTML = html;
      //console.log('tagsWrapper.innerHTML =', tagsWrapper.innerHTML);
      // END LOOP: for every article:
      // NOTE: No spacing between tags! Fixed in .list-horizontal class within style.scss
    }
  };

  generateTags();

  // - - - - - - - - - - - - - - - - - - - - - -
  // - - - - - H A N D L E   T A G S - - - - - -
  // - - - - - -  C L I C K I N G - - - - - - -
  // - - - - - - - - - - - - - - - - - - - - - -

  const tagClickHandler = function (event) {
    // prevent default action for this event
    event.preventDefault(); // Do not jump to #

    // make new constant named "clickedElement" and give it the value of "this"
    const clickedElement = this;
    console.log('Link was clicked!');

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

  END LINE OF COMMENT OUT */

}
