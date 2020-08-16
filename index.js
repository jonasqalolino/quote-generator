const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('#quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')

// Get quote from API
const getQuote = async () => {
	const proxyUrl = 'https://rocky-earth-03441.herokuapp.com/'
	const apiUrl =
		'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

	try {
		const response = await fetch(proxyUrl + apiUrl)
		const data = await response.json()
		console.log(data)

		// If Author is blank, author is equal to Unknown
		data.quoteAuthor === ''
			? (authorText.textContent = 'Unknown')
			: (authorText.textContent = data.quoteAuthor)

		// Reduce font size if the quotes are long
		data.quoteText.length > 120
			? quoteText.classList.add('long-quote')
			: quoteText.classList.remove('long-quote')

		quoteText.textContent = data.quoteText
	} catch (error) {
		getQuote()
	}
}

getQuote()
