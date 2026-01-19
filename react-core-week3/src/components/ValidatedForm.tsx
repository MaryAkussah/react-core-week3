import { useState } from "react";

function ValidatedForm() {
   const [name,setName] = useState("");
   const [email, setEmail] = useState("");
   const [error ,setError] = useState("");
   const [success, setSuccess] = useState(false)

   function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if(!name || !email ){
        setError("All fields are required");
        setSuccess( false);
        return;
    }

    if(!email.includes("@")){
        setError("Email must be valid ");
        setSuccess( false);
        return;
    }
    setError("");
    setSuccess( true);

}
return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Form submitted successfully!</p>}
    </form>
  );
}

export default ValidatedForm;