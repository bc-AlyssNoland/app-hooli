/* global instantsearch */

app({
  appId: 'FP9WZYG9KK',
  apiKey: '684ca6d753e316e196e7ac62d730629c',
  indexName: 'apps_BC'
});



function app(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'App search'
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 15,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      } 
   })
);

  search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#app_status',
    attributeName: 'app_status',
    operator: 'or',
    limit: 41,
    templates: {
      header: 'Status'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#category',
    attributeName: 'category_names',
    operator: 'or',
    limit: 40,
    templates: {
      header: 'Category'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#tags-facet',
    attributeName: 'tags',
    operator: 'or',
    limit: 50,
    templates: {
      header: 'Tags'
    }
  })
);
  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    })
  );


  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}
