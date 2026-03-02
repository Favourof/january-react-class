
import { useForm } from 'react-hook-form';
import './ReactForm.css';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


export const ReactForm = () => {

    const schema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
        email: z.string().email({ message: "invalid email" }),
        username: z.string().min(3, { message: "username must be at least 3 characters long" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
        age: z
            .preprocess(
                (value) => (typeof value === "string" ? Number(value) : value), // Convert string to number
                z.number().min(18, "Age must be at least 18")
            ),
        gender: z.string()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",

    })

    console.log(errors.name);





    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <section className="signup-page">
            <div className="signup-wrap">
                <div className="signup-intro">
                    <p className="signup-kicker">Create Account</p>
                    <h1>Join the community</h1>
                    <p>
                        Fill in your details below. This is UI-only for now, so no submit or field logic has been added yet.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="signup-card">
                    <div className="signup-grid">
                        <div className="field-group">
                            <label htmlFor="name">Full Name</label>
                            <input {...register("name")} id="name" name="name" type="text" placeholder="John Doe" />
                            {errors.name && <p style={{ color: "red", fontSize: "10px" }}>{errors.name.message}</p>}
                        </div>

                        <div className="field-group">
                            <label htmlFor="username">Username</label>
                            <input id="username" {...register("username")} name="username" type="text" placeholder="@john_doe" />
                            {errors.username && <p style={{ color: "red", fontSize: "10px" }}>{errors.username.message}</p>}
                        </div>

                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" {...register("email")} name="email" type="email" placeholder="john@example.com" />
                            {errors.email && <p style={{ color: "red", fontSize: "10px" }}>{errors.email.message}</p>}
                        </div>

                        <div className="field-group">
                            <label htmlFor="age">Age</label>
                            <input id="age" name="age" {...register("age")} type="number" placeholder="23" min="1" />
                            {errors.age && <p style={{ color: "red", fontSize: "10px" }}>{errors.age.message}</p>}
                        </div>
                    </div>

                    <div className="field-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" {...register("password")} type="password" placeholder="Enter a strong password" />
                        {errors.password && <p style={{ color: "red", fontSize: "10px" }}>{errors.password.message}</p>}
                    </div>

                    <div className="field-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" {...register("gender")} defaultValue="">
                            <option value="" disabled>
                                Select gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p style={{ color: "red", fontSize: "10px" }}>{errors.gender.message}</p>}
                    </div>

                    <button type="submit">Create account</button>
                </form>
            </div>
        </section>
    );
};
