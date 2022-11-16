import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import usePuppies from "../hooks/usePuppies";

export default function CreatePupForm() {
  const { createPuppy } = usePuppies();

  const [name, setname] = useState("");
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPuppy({ name, age, email });
    setname("");
    setAge(undefined);
    setEmail("");
  };

  return (
    <div>
      <h4>Create Puppy Form:</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => {
            setAge(+e.target.value);
          }}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
