// import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const ContuctMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cl2as54",
        "template_ba8h96j",
        form.current,
        "69Sz-CP4Hit9WY7vh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      icon: "success",
      title: "Your message was send",
      text: "Thank you...!",
    });
    e.target.reset();
  };

  return (
    <div id="contuct" className="container mx-auto mb-6">
      <div className="mx-20 mb-20">
        <h1 className="text-4xl tracking-widest mb-5 font-bold">
          My social link
        </h1>
        <hr />
      </div>
      <div>
        <div>
          <p>
            <span className="mx-10">
              <a
                className="text-yellow-300 text-3xl font-bold"
                href="https://www.facebook.com/pallabbiswas.pallabbiswas.311"
              >
                Facebook
              </a>
            </span>{" "}
            ||{" "}
            <span className="mx-10">
              <a
                className="text-yellow-300 text-3xl font-bold"
                href="https://www.linkedin.com/in/partho-bepary-53a917229/"
              >
                Linkedin
              </a>
            </span>{" "}
            ||{" "}
            <span className="mx-10">
              <a
                className="text-yellow-300 text-3xl font-bold"
                href="https://github.com/pallobbiwas"
              >
                Github
              </a>
            </span>
          </p>
        </div>
        <div>
          <div>
            <h1 className="text-3xl text-primary my-20">
              Ask a question free / message me
            </h1>
            <div className="bg-slate-500 rounded-lg p-3">
              <form ref={form} action="" onSubmit={sendEmail}>
                <input
                  required
                  className="input input-bordered w-3/4 text-center text-white"
                  type="text"
                  name="user_email"
                  placeholder="Your email"
                />
                <br />
                <textarea
                  required
                  className="input input-bordered w-3/4 text-center text-white h-44 my-4"
                  placeholder="Your message"
                  name="message"
                ></textarea>
                <br />
                <input
                  className="btn btn-primary px-20"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContuctMe;
