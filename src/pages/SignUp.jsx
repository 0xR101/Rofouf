import { FaUser } from "react-icons/fa";
import { PiLockFill } from "react-icons/pi";
import { HiMail } from "react-icons/hi";

function SignUp() {
	return (
		<>
			<section className="gradient-form h-full">
				<div className="container h-full p-10">
					<div className="flex flex-wrap h-full  items-center justify-center text-neutral-800 dark:text-neutral-200">
						<div className="w-full">
							<div className="block rounded-lg bg-backGround shadow-lg light:bg-neutral-800">
								<div className="g-0 lg:flex lg:flex-wrap">
									<div className="px-4 md:px-0 lg:w-6/12">
										<div className="md:mx-6 md:p-12">
											<div className="text-center">
												<img
													className="mx-auto w-48"
													src="src/assets/background.svg"
													alt="logo"
												/>
											</div>

											<form>
												<div
													className="relative mb-4  bg-backGround"
													data-twe-input-wrapper-init
												>
													<input
														type="text"
														className="peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
														id="username"
														placeholder="Name"
													/>
													<label
														htmlFor="username"
														className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary "
													>
														<FaUser /> Name
													</label>
												</div>
												<div
													className="relative mb-4  bg-backGround"
													data-twe-input-wrapper-init
												>
													<input
														type="text"
														className="peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
														id="username"
														placeholder="Username"
													/>
													<label
														htmlFor="username"
														className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary "
													>
														<FaUser /> Username
													</label>
												</div>
												<div
													className="relative mb-4  bg-backGround"
													data-twe-input-wrapper-init
												>
													<input
														type="email"
														className="peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
														id="username"
														placeholder="Username"
													/>
													<label
														htmlFor="username"
														className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary "
													>
														<HiMail /> Email
													</label>
												</div>

												<div
													className="relative mb-4  bg-backGround"
													data-twe-input-wrapper-init
												>
													<input
														type="password"
														className="peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
														id="password"
														placeholder="Password"
													/>
													<label
														htmlFor="password"
														className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
													>
														<PiLockFill /> Password
													</label>
												</div>

												<div
													className="relative mb-4  bg-backGround"
													data-twe-input-wrapper-init
												>
													<input
														type="password"
														className="peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
														id="password"
														placeholder="confirm Password"
													/>
													<label
														htmlFor="password"
														className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
													>
														<PiLockFill /> Confirm
														Password
													</label>
												</div>

												<div className="text-black rounded-lg bg-[#53373750] p-1"> Gender <br />
													<input type="radio" name="genderRadio" id="maleChoice"checked />
													<label htmlFor="maleChoice" >
														Male
													</label>
                                                    <input type="radio" name="genderRadio" id="femaleChoice" />
													<label htmlFor="femaleChoice" >
														Female
													</label>
												</div>

												<div className=" pb-1 pt-1 text-center">
													<button
														className="mb-3 inline-block w-full rounded-lg px-6 pb-1 pt-1 text-base font-bold   leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-primary"
														type="button"
														data-twe-ripple-init
														data-twe-ripple-color="light"
													>
														Sign up
													</button>
												</div>

												<div className="flex items-center  justify-center pb-6">
													<p className="mb-0 me-2 text-black">
														Do have an account?{" "}
														<a
															className="text-primary no-underline"
															href="SignIn"
														>
															Login
														</a>
													</p>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SignUp;
