import { useForm } from "react-hook-form";

export default function SessionForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({ email, password }) => {};

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-normal text-[28px] text-primary mb-[20px]">
        Aluritter
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="mail"
          className="w-[378px] h-[42px] border border-tertiary rounded-[4px] p-[9px]"
          {...register("email", {
            required: { value: true, message: "An email address is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid e-mail",
            },
          })}
          placeholder="email@exemplo.com"
        />
        <p className="text-tertiary pt-[3px]">{errors.email?.message}</p>
        <input
          type="password"
          className="w-[378px] h-[42px] border border-tertiary rounded-[4px] p-[9px] mt-[10px]"
          {...register("password", {
            required: { value: true, message: "A password is required" },
          })}
          placeholder="Senha"
        />
        <p className="text-tertiary pt-[3px]">{errors.password?.message}</p>
        <button
          type="submit"
          className="w-[378px] h-[42px] bg-secondary rounded-[4px] text-quaternary mt-[25px]"
        >
          {props.button}
        </button>
      </form>
      <p className="text-tertiary pt-[3px]">
        {props.text} <a className="text-primary">{props.link}</a>
      </p>
    </div>
  );
}
