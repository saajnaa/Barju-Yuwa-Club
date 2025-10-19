import { User } from '../models/User.js'


const getUser = async (req, res) => {



    try {

        const newUser = await User.find()


        res.json('got data from database', newUser)
        console.log(newUser)


    } catch (error) {
        console.log(error.message)
        res.json(error.message)

    }


}

export default getUser
