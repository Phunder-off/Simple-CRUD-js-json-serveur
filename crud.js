const APILINK = "http://localhost:3000/posts";

//get
function getAll() {
	axios.get(`${APILINK}/`).then((res) => console.log(res.data));
}

function get(id) {
	axios.get(`${APILINK}/${id}`).then((res) => console.log(res.data));
}
// end get


// post
function post(id, title, author) {
	axios.post(`${APILINK}`, { id, title, author }).then((res) => console.log(res.data));
}
// end post


// update
function patchTitle(id, title) {
	axios.patch(`${APILINK}/${id}`, { title }).then((res) => console.log(res.data));
}

function put(id, title, author) {
	axios.put(`${APILINK}/${id}`, { title, author }).then((res) => console.log(res.data));
}
// end update

// delete
function del(id) {
	axios.delete(`${APILINK}/${id}`).then((res) => console.log(res.data));
}
// end delete