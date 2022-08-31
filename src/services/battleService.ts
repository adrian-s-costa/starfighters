import axios from "axios";

export async function battlePost(users){
    const firstUser = users.firstUser
    try{
        console.log((firstUser)=>{
            axios.get(`https://api.github.com/users/${firstUser}/starred`)
            .then((res) => JSON.parse(res.data))
            .then((starred) => starred.map((s) => ({
                owner:       s.owner.login
                , repo:        s.name
                , description: s.description
                , language:    s.language
                , isFork:      false
                , stargazers:  s.stargazers_count
                , watchers:    s.watchers_count
            })))
        })
    }catch (err) {
        console.log(err);
    }
}