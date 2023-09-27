import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      {signinErrors.map((error, i) => (
        <div className=" bg-red-500 p-2" key={i}>
          {error}
        </div>
      ))}
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Username is required</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Username is required</p>
          )}

          <button type="submit">Login</button>
        </form>

        <p className="flex gap-x-2 justify-between">
            Dont have an account? <Link className="text-sky-500" to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
