"use client";

import { motion } from "framer-motion";

import { useState } from "react";

export default function OrderServiceForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Nieruchomości");
  const [localization, setLocalization] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");
    setMsg("");

    const res = await fetch(`/api/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name,
        lastName: surname,
        email,
        localization,
        service,
        message: description,
      }),
    });

    if ([422, 401, 403, 404, 405, 429, 500].includes(res.status)) {
      setIsLoading(false);
      setError("Wystąpił problem, odśwież stronę i spróbuj ponownie później");
    } else if (res.status === 200) {
      setIsLoading(false);
      setMsg("Pomyślnie wysłano formularz");
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-12 items-center w-full pb-10">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }}
        className="text-center"
      >
        Zamów usługę
      </motion.h3>
      <div className="w-full px-5 md:px-14 lg:px-44 flex justify-center">
        <motion.form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 bg-white rounded-md shadow-[0_0px_50px_0px_rgba(0,0,0,0.1)] py-10 px-10 md:px-20 w-full max-w-6xl"
        >
          {/* NAME */}
          <input
            required
            type="text"
            name="name"
            pattern="[A-Za-z]+"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-field"
            placeholder="Imię"
          />

          {/* SURNAME */}
          <input
            required
            type="text"
            pattern="[A-Za-z]+"
            name="surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            className="form-field"
            placeholder="Nazwisko"
          />

          {/* EMAIL */}
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-field"
            placeholder="Email"
          />

          {/* LOCALIZATION */}
          <input
            required
            type="text"
            name="localization"
            value={localization}
            onChange={(e) => {
              setLocalization(e.target.value);
            }}
            className="form-field"
            placeholder="Lokalizacja"
          />

          <div className="flex flex-col lg:col-span-2 gap-8 lg:gap-4 items-center">
            {/* SERVICE */}
            <select
              required
              name="service"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
              }}
              className="form-field w-full lg:w-1/2 xl:w-1/3"
            >
              <option defaultChecked value="Nieruchomości">
                Nieruchomości
              </option>
              <option defaultChecked value="Wydarzenia">
                Wydarzenia
              </option>
              <option defaultChecked value="Inne">
                Inne
              </option>
            </select>

            {/* DESCRIPTION */}
            <textarea
              required
              name="description"
              value={description}
              rows={3}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-field resize-none text-bottom w-full lg:w-4/5"
              placeholder="Wiadomość"
            />
          </div>

          <div className="lg:col-span-2 flex justify-center relative">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.7, duration: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#EF9400",
                color: "white",
                transition: { type: "spring", duration: 1 },
              }}
              whileTap={{
                scale: [1, 0.8, 1],
                transition: { duration: 0.2 },
              }}
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Ładowanie..." : "Wyślij"}
            </motion.button>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto px-3 py-2 rounded-md z-40 shadow-sm bg-red-300 text-center"
              >
                {error}
              </motion.div>
            )}
            {msg && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto px-3 py-2 rounded-md z-40 shadow-sm bg-green-300 text-center"
              >
                {msg}
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
