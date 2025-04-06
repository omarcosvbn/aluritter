import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Post(props) {
  const {
    post,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({ posttext }) => {};
  const [length, setLength] = useState(props.limit);

  return (
    <div className="w-[80vw] h-[196px] flex flex-col items-center justify-center">
      <p>Aluritte agora mesmo...</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="w-[250px] h-[100px]"
          // {...post("posttext", { required: true, maxlength: "8"})}
          onChange={() => setLength(this.state.value)}
        />
        <div>
          <p>Você ainda pode digitar {length} caracteres</p>
          <button type="submit">aluritar</button>
        </div>
      </form>
    </div>
  );
}
