import axios from "axios";
import got from 'got'

export async function battlePost(users){
    const firstUser:string = users.firstUser
    try{
        

        const stars = (user) =>
            axios.get(`https://api.github.com/users/${user}/starred`)
            .then((res) => (res.data))
            .then((starred) => starred.map((s) => ({
                owner:       s.owner.login
                , repo:        s.name
                , description: s.description
                , language:    s.language
                , isFork:      false
                , stargazers:  s.stargazers_count
                , watchers:    s.watchers_count
            })))

        stars(firstUser).then(console.log)
            
    }catch (err) {
        console.log(err);
    }
}