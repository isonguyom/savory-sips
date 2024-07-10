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

    const states = [
        { label: "Select a state", value: "" },
        { label: "Abia", value: "AB" },
        { label: "Lagos", value: "LA" },
        { label: "Kano", value: "KA" },
        // Add more options as needed
    ];
    const towns = [
        { label: "Select a town", value: "" },
        { label: "Uyo", value: "UYY" },
        { label: "Aba", value: "ABA" },
        { label: "Jos", value: "JOS" },
        // Add more options as needed
    ];

    return (
        <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-y-5 w-full lg:w-1/2 lg:pr-4">
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
                        options={states}
                        onChange={handleChange}
                        required
                    />
                    <SelectField
                        label="Town/City"
                        name="state"
                        value={formData.town}
                        options={towns}
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
                            placeholder=""
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
                <div className="w-full lg:w-1/2 lg:pl-4">
                    <h3 className="text-[#180A0B] font-bold text-lg lg:text-xl mb-6">Your Order</h3>
                    <div className="bg-[#FFEFF0] border border-[#7F5759] p-4 mb-6">
                        <div className="flex flex-col gap-y-5 text-[#180A0B] border-b border-[#F2E2E2] pb-6 mb-6">
                            <div className="text-bold text-lg lg:text-xl flex items-center justify-between gap-x-4 border-b border-[#F2E2E2] pb-3">
                                <h4>Product</h4>
                                <h4 className="text-right">Subtotal</h4>
                            </div>

                            <div className="lg:text-lg flex items-center justify-between gap-x-4">
                                <p>Four Cousins | 75cl | 2 Bottles  </p>
                                <p className="text-right text-[#910B15]">NGN16,000.00</p>
                            </div>
                            <div className="font-bold flex items-center justify-between gap-x-4">
                                <h4>Subtotal  </h4>
                                <h4 className="lg:text-lg text-right ">NGN16,000.00</h4>
                            </div>
                        </div>

                        <h4 className="text-bold text-lg lg:text-xl text-[#180A0B]">Shipping</h4>
                        <div className="text-[#180A0B] lg:text-lg font-bold flex flex-col gap-y-3 mt-5">
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Asaba, Delta</h4>
                                </div>
                                <h4 className="text-right text-[#910B15]">NGN1,500.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Akwa</h4>
                                </div>
                                <h4 className="text-right">NGN1,000.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Jos</h4>
                                </div>
                                <h4 className="text-right">NGN3,000.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Ikeja</h4>
                                </div>
                                <h4 className="text-right">NGN2,500.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Uyo</h4>
                                </div>
                                <h4 className="text-right">NGN2,000.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Yola</h4>
                                </div>
                                <h4 className="text-right">NGN1,000.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Enugu</h4>
                                </div>
                                <h4 className="text-right">NGN2,000.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Benue</h4>
                                </div>
                                <h4 className="text-right">NGN2,500.00</h4>
                            </div>
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex gap-x-4 items-center mt-2">
                                    <input type="radio" name="shipTo" id="other" />
                                    <h4 className="text-[#180A0B]">Lokoja</h4>
                                </div>
                                <h4 className="text-right">NGN1,000.00</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#12180A] font-bold lg:text-lg">
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                        </p>
                        <div>

                            <div className="flex gap-x-4 items-center mt-2">
                                <input type="checkbox" id="other" />
                                <label className="text-[#180A0B]">I agree to the <a className="underline text-[#501B1F]">Terms and Conditions</a></label>
                            </div>
                        </div>
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
