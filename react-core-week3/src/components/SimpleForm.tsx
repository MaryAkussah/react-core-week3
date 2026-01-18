import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type = "text"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                 />
                 </div>

                 <div>
                 <label>Email</label>
                 <input 
                 type = "email"
                 value = {email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </div>

            <button type="submit">Submit</button>
            <p>
                Hello {name}, your email is {email}
            </p>
    
        </form>
    )
}
export default SimpleForm 