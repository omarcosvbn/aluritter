import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Posts(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [length, setLength] = useState(props.limit);
  const [submissions, setSubmissions] = useState([]);

  const onSubmit = (data) => {
    const submittedAt = new Date();
    const newEntry = {
      message: data.post,
      time: submittedAt.toLocaleString(),
      email: props.email,
    };

    setSubmissions((prev) => [...prev, newEntry]);
  };

  return (
    <div className="mt-[40px] w-[80vw] flex flex-col items-start justify-center">
      <p className="ml-[8px] mb-[10px] text-[14px]">Aluritte agora mesmo...</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          maxLength={props.limit}
          className="bg-white w-[80vw] h-[114px]"
          {...register("post", { required: true, maxLength: props.limit })}
          onChange={(e) => setLength(props.limit - e.target.value.length)}
        />
        <div className="flex flex-row items-center justify-between">
          <p className="text-secondary text-[14px]">
            Você ainda pode digitar {length} caracteres
          </p>
          <button
            className="p-[8px] bg-primary text-white rounded-[3px]"
            type="submit"
          >
            aluritar
          </button>
        </div>
      </form>

      {submissions.map((entry, index) => (
        <div
          key={index}
          className="bg-white w-[80vw] px-[17px] pt-[19px] pb-[9px] mt-[20px]"
        >
          <p className="text-[#6B7280]">{entry.message}</p>
          <div className="flex justify-between items-center mt-[30px]">
            <p className="text-primary text-[14px]">{entry.email}</p>
            <p className="text-[#6B7280] text-[14px]">{entry.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
