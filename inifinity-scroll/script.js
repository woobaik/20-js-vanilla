const input = document.getElementById("filter")
const postContainer = document.getElementById("post-container")
const loader = document.getElementById("loader")

let page = 1
let limit = 4

const fetchPost = async () => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
	)

	const data = await response.json()

	return data
}

const showPost = async () => {
	const data = await fetchPost()
	console.log(data)

	data.forEach((post) => {
		const div = document.createElement("div")
		div.innerHTML = `
            <div class="post">
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">
                    ${post.body}
                </p>
            </div>
            </div>
        `

		postContainer.append(div)
	})
}

showPost()

const showMorePost = async () => {
	loader.classList.add("show")
	page++
	await showPost()
	loader.classList.remove("show")
}

window.addEventListener("scroll", () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement

	if (scrollTop + clientHeight > scrollHeight - 5) {
		showMorePost()
	}
})
