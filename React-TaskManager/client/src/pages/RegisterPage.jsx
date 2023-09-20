import {useForm} from 'react-hook-form'

function RegisterPage (){
    const {register, handleSubmit} = useForm();

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit((values) =>{
                console.log(values);
            })}>
                <input type="text" placeholder='Username' {...register("username", {required: true})} />
                <input type="email" placeholder='Email' {...register("Email", {required: true})} />
                <input type="password" placeholder="Password" {...register("Password", {required: true})} />

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;