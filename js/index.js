/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */

// Only return the data we need. Implicit return with arrow function.
const massageData = data => data.map( repo => {
  return {
    name: repo.name,
    url: repo.git_url,
    stars: repo.stargazers_count
  }
} )

// Narrow down data to greater than 20 stars.
const filterData = data => data.filter( repo => repo.stars > 10 )

// Convert each item to our link format
const convertDataToHTMLString = data => {
  return data.map( repo => `<li><a href="${repo.url}">${repo.name} (${repo.stars})</a></li>` ).join( '' )
}

// Add the list to the DOM
const createList = HTMLString => {
  const ol = document.createElement( 'ol' )
  ol.innerHTML = HTMLString
  document.body.appendChild( ol )
}

// Since Fetch is a Promise, send the error into a catch call with reject()
const handleResponse = response => {
  return response.json()
    .then( body => {
      // response.json returns a promise, so resolve it first.
      if ( response.ok ) return body
      return Promise.reject( { body } )
    } )
}

/**
 * Request all user's repositories and transform response with named callbacks.
 * @see documentation https://developer.github.com/v3/repos/
 */
fetch( 'https://api.github.com/users/zellwk/repos' )
  .then( handleResponse )
  .then( massageData )
  .then( filterData )
  .then( convertDataToHTMLString )
  .then( createList )
  .catch( error => console.log( `error is`, error ) )