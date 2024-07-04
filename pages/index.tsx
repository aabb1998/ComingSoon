import Link from "next/link";
import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const IndexPage = () => {
  const form = useRef();
  const [message, setMessage] = useState(null); // State to manage the message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8tscci7", "template_cy8jeia", form.current, {
        publicKey: "pJcIFnW5Qp43g2kP9",
      })
      .then(
        () => {
          setMessage({ text: "Email sent successfully!", type: "success" });
        },
        (error) => {
          setMessage({
            text: "Failed to send email. Please try again.",
            type: "error",
          });
        }
      );
  };
  return (
    <Layout title="Alihsan Foundation USA">
      <img src="/images/Logo.png" alt="Themeptation" className="h-40" />
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
        <div className="text-center space-y-10">
          <h3 className="font-light text-xl uppercase tracking-wider">
            Coming soon
          </h3>
          <h1 className="text-7xl lg:text-9xl font-extrabold">
            Under Construction
          </h1>
          <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            Alihsan Foundation USA is currently under construction.
          </p>
        </div>
        {message && (
          <div
            className={`mt-4 p-4 w-11/12 mx-auto rounded-md ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
        <form
          className="w-11/12 mx-auto flex flex-col gap-2"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="font-bold">Name</label>
          <input className="rounded-md h-10 p-1" type="text" name="user_name" />
          <label className="font-bold">Email</label>
          <input
            className="rounded-md h-10 p-1"
            type="email"
            name="user_email"
          />
          <label className="font-bold">Message</label>
          <textarea className="rounded-md h-28 p-1" name="message" />
          <button
            type="submit"
            value={"Send"}
            className="p-7 mt-8 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default IndexPage;
