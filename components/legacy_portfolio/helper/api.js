import axios from 'axios';
// const host = "http://192.168.1.5:1337"
const host = 'https://backend.yosua.io';
// const host = "http://localhost:1337"

export const getProjects = () => {
	return axios.post(`${host}/graphql`, {
		query: `query{
  projects(sort : "created_at"){
    id
    subtitle
    description
    title
    url
    image_url
    created_at
    priority
    call_to_action
    year
  }
}
`,
	});
};
