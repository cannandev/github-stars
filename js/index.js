/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */

// Since Fetch is a Promise, send the error into a catch call with reject()
const handleResponse = response => {
  return response.json()
    .then( body => {
      // response.json returns a promise, so resolve it first.
      if ( response.ok ) return body
      return Promise.reject( { body } )
    } )
}

const buildList = data => {
  return data.map( repo => `<li><a href="${repo.url}">${repo.name} (${repo.stars})</a></li>` )
    .join( '' )
}

/**
 * Execution.
 * Request all user's repositories and transform response with named callbacks.
 * @see documentation https://developer.github.com/v3/repos/
 */
fetch( 'https://api.github.com/users/zellwk/repos?per_page=100' )
  .then( handleResponse )
  .then( data => data.map(repo => {
		return {
			name: repo.name,
			url: repo.git_url,
			stars: repo.stargazers_count,
		}
	}))
	.then( data => {
		const slider = document.getElementById( 'range-slider' )
    const ol = document.querySelector( '.repo-list' )
    ol.innerHTML = buildList(data)
		slider.addEventListener('input', e => {
			let num = slider.value
			const badge = slider.nextElementSibling
			const filtered = data.filter( repo => ( repo.stars > parseInt( num ) ) )
			badge.textContent = num
			ol.innerHTML = buildList(filtered)
		})
	})
  .catch( error => console.log( `error is`, error ) )
