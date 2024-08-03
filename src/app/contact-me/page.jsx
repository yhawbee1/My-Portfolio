
"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

export default function Contact() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null)

  async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "c197cf33-1230-406f-acf4-eb7c97b8ecfb"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Your message has been sent successfully!🎉");
        setError(null); // Clear any previous error messages
        if (formRef.current) {
          formRef.current.reset(); // Reset the form fields
        }
        setIsLoading(false);
        
      } else {
        setError("We encountered an issue while processing your request. Please try again.");
        setSuccess(null); // Clear any previous success messages
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Oops! Something went wrong. Please try again later.");
      setSuccess(null); // Clear any previous success messages
    }
  }

  return (
    <section className="flex flex-col h-full items-center justify-center px-3 md:px-5">
      <div className="text-start">
        <div className="mb-6">
          <h1 className="font-epilogue lg:text-[96px] lg:leading-[75px] text-[45px] md:text-[65px] font-bold w-full">Contact <span className="text-brianGreen">Me.</span></h1>  
          <p className="font-poppins">Got a project or question? Reach out, and I&apos;ll get back to you soon.</p>
        </div>
        
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="md:space-y-4 space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="bg-black w-full rounded-full border  py-5 ps-4 pe-2 font-epilogue backdrop-blur-md placeholder:text-white"
            name="name"
            required
          />
          <input
            type="email"
            className="w-full rounded-full border py-5 ps-4 pe-2 placeholder:text-white"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="w-full rounded-3xl border py-5 ps-4 pe-2 placeholder:text-white h-[150px] md:h-"
        
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <Button
            className="h-[50px] w-full rounded-full border border-brianGreen bg-brianGreen font-poppins text-black hover:bg-transparent hover:text-brianGreen max-[320px]:h-fit md:h-[60px] md:w-[250px] 2xl:text-xl"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ?<Loader className="animate-spin" />  : "Send Message"}
            
          </Button>
          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
    </section>
  );
}
