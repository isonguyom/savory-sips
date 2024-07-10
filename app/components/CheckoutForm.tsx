// ExampleForm.tsx

import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const CheckoutForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        state: "",
        town: "",
        phone: "",
        email: "",
        country: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form data:", formData);
    };

    const countries = [
        { label: "Select a country", value: "" },
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" },
        { label: "United Kingdom", value: "UK" },
        // Add more options as needed
    ];

    return (
        <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-y-5 w-full lg:w-1/2 lg:pr-5">
                    <InputField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
                    <InputField
                        label="First Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />

                    <SelectField
                        label="State"
                        name="state"
                        value={formData.state}
                        options={countries}
                        onChange={handleChange}
                        required
                    />
                    <SelectField
                        label="Town/City"
                        name="state"
                        value={formData.town}
                        options={countries}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        required
                    />
                    <div>
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        <div className="flex gap-x-4 items-center">
                            <input type="checkbox" id="other" />
                            <label>Ship to a different address</label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="font-bold lg:text-lg block mb-3">Order Notes (optional)</label>
                        <textarea placeholder="Notes about your order( any special notes)" className="border border-[#501B1F] bg-[#F2EEED] rounded-[9px] w-full h-[100px] p-3 placeholder:text-[#12180A] placeholder:text-opacity-60"></textarea>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-5">
                    <h3 className="text-[#180A0B] font-bold text-lg lg:text-xl mb-6">Your Order</h3>
                    <div>

                    </div>
                    <div>
                        <p className="text-[#12180A] font-bold lg:text-lg">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                        </p>
                        <p>

                            <div className="flex gap-x-4 items-center">
                                <input type="checkbox" id="other" />
                                <label className="text-[#180A0B]">I agree to the <a className="underline text-[#501B1F]">Terms and Conditions</a></label>
                            </div>
                        </p>
                    </div>
                    <button className="w-full bg-[#501B1F] text-white rounded-[17px] py-2 px-4 font-bold text-lg mt-8">
                        Place your order
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;
