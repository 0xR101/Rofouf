import { FaUser } from "react-icons/fa";
import { PiLockFill } from "react-icons/pi";
import { HiMail } from "react-icons/hi";
import NavBar from "./../components/nav/NavBar.jsx";


function SignUp() {
	return (
		<>
			<section className="gradient-form h-full bg-white">
				<NavBar />
				<div className="container size-8/12 py-5 m-auto ">
					<div className="flex flex-wrap h-full shadow-2xl rounded-lg items-center justify-center text-neutral-800 dark:text-neutral-200 ">
						<div className="w-full ">
							<div className=" block rounded-lg   bg-backGround shadow-lg light:bg-neutral-800 ">
								<div className="g-0 ">
									<div className="px-4 md:px-0 lg:w-full">
										<div className="">
											<div className="grid grid-cols-2  max-md:flex max-sm:flex ">
												<form className=" p-12  max-md:w-full max-sm:w-full gap-y-2 grid">
													{/* the input for the name */}
                                                    
													<div
														className="relative mb-4  bg-backGround "
														data-twe-input-wrapper-init
													>
														<input
															type="text"
															className="pl-1.5 peer  block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 text-base  py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary  motion-reduce:transition-none dark:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary "
															id="name"
															placeholder=""
															required
														/>
														<label
															htmlFor="name"
															className="absolute text-base dark:peer-focus:text-primary text-white  duration-200 transform -translate-y-4  scale-85 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1  "
														>
															<FaUser className="text-primary" />{" "}
															Name
														</label>
													</div>
													{/* the input for the username */}
													<div
														className="relative mb-4  bg-backGround "
														data-twe-input-wrapper-init
													>
														<input
															type="text"
															className="pl-1.5 peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 text-base  py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary  motion-reduce:transition-none dark:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary"
															id="username"
															placeholder=""
															required
														/>
														<label
															htmlFor="username"
															className="absolute text-base dark:peer-focus:text-primary text-white  duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
														>
															<FaUser className="text-primary" />{" "}
															Username
														</label>
													</div>

													{/* the input for the email */}
													<div
														className="relative mb-4  bg-backGround "
														data-twe-input-wrapper-init
													>
														<input
															type="email"
															className="pl-1.5 peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 text-base  py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary  motion-reduce:transition-none dark:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary"
															id="email"
															placeholder=""
															required
															
														/>
														<label
															htmlFor="email"
															className="absolute text-base dark:peer-focus:text-primary text-white  duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
														>
															<HiMail className="text-primary" />{" "}
															Email
														</label>
													</div>

													{/* the input for the password */}
													<div
														className="relative mb-4  bg-backGround"
														data-twe-input-wrapper-init
													>
														<input
															type="password"
															className=" pl-1.5 peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 text-base  py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary  motion-reduce:transition-none dark:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary"
															id="password"
															placeholder=""
															required
															minLength={8}
														/>
														<label
															htmlFor="password"
															className="absolute text-base dark:peer-focus:text-primary text-white  duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
														>
															<PiLockFill className="text-primary " />{" "}
															Password
														</label>
													</div>
													{/* the input for the confirming the password */}
													<div
														className="relative mb-4  bg-backGround"
														data-twe-input-wrapper-init
													>
														<input
															type="password"
															className="pl-1.5 peer block min-h-[auto] w-full rounded-lg bg-[#53373750] border-0 text-base  py-[0.42rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary  motion-reduce:transition-none dark:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary"
															id="conf-password"
															placeholder=""
															required
															minLength={8}
														/>
														<label
															htmlFor="conf-password"
															className="absolute text-base dark:peer-focus:text-primary text-white  duration-200 transform -translate-y-4 scale-85 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
														>
															<PiLockFill className="text-primary " />{" "}
															Confirm Password
														</label>
													</div>

													<div className=" pb-1 pt-1 text-center">
														<input
															className="my-4 inline-block w-full rounded-lg px-6 pb-1 pt-1 text-base font-bold   leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-primary"
															type="submit"
															data-twe-ripple-init
															data-twe-ripple-color="light"
															value="Sign up"
														></input>
													</div>

													<div className="flex items-center  justify-center text-center">
														<p className="mb-0 me-2 text-black">
															Do have an
															account?{" "}
															<a
																className="text-primary no-underline"
																href="SignIn"
															>
																<br />
																Login
															</a>
														</p>
													</div>
												</form>
												<div className="text-center rounded-lg max-sm:hidden max-md:hidden">
													<div className="rounded-lg h-full w-100 bg-cover   bg-no-repeat bg-center bg-[url('src/assets/background.svg')] " />
												</div>
											</div>
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
