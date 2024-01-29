import data from "../../Assets/data.json"

const SignUp = () => {
    return(
        <div>  
            {data.map((person)=>{
                return(
                    <div>
                        <h1>{person.name}</h1>
                        <p>{person.age}</p>
                        <p>{person.city}</p>
                    </div>

                )
            }
            )}
        </div>
    )
}

export default SignUp