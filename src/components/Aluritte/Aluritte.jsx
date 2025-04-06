import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Aluritte(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => console.log(data);
  const [length, setLength] = useState(props.limit);

  return (
    <div className="mt-[40px] w-[80vw] flex flex-col items-start justify-center">
      <p className="ml-[8px] mb-[10px]">Aluritte agora mesmo...</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          maxLength={props.limit}
          className="bg-white w-[80vw] h-[114px]"
          {...register("post", { required: true, maxLength: props.limit})}
          onChange={(e) => setLength(props.limit - e.target.value.length)}
        />
        <div className="flex flex-row items-center justify-between">
          <p className="text-secondary">Você ainda pode digitar {length} caracteres</p>
          <button className="p-[8px] bg-primary text-white rounded-[3px]" type="submit">aluritar</button>
        </div>
      </form>
    </div>
  );
}
