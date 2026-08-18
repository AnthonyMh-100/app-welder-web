"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { serviceTitles } from "@/lib/services";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form className="form-panel" action={formAction}>
      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="name"
          type="text"
          placeholder="¿Cómo te llamas?"
          aria-invalid={Boolean(state.fieldErrors.name)}
        />
        {state.fieldErrors.name ? (
          <p className="form-error">{state.fieldErrors.name}</p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="Tu número de contacto"
          max={9}
          aria-invalid={Boolean(state.fieldErrors.phone)}
        />
        {state.fieldErrors.phone ? (
          <p className="form-error">{state.fieldErrors.phone}</p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="tipo">Tipo de trabajo</label>
        <select
          id="tipo"
          name="workType"
          defaultValue={serviceTitles[0]}
          aria-invalid={Boolean(state.fieldErrors.workType)}
        >
          {serviceTitles.map((title) => (
            <option key={title}>{title}</option>
          ))}
          <option>Otro</option>
        </select>
        {state.fieldErrors.workType ? (
          <p className="form-error">{state.fieldErrors.workType}</p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="mensaje">Cuéntame sobre el trabajo</label>
        <textarea
          id="mensaje"
          name="message"
          placeholder="Medidas aproximadas, ubicación, urgencia..."
          aria-invalid={Boolean(state.fieldErrors.message)}
        />
        {state.fieldErrors.message ? (
          <p className="form-error">{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full justify-center bg-linear-to-br from-spark to-[#d95e0c] text-[#171106] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_-6px_rgba(255,122,26,0.55)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isPending}
      >
        {isPending ? "Enviando..." : "Enviar y coordinar visita"}
      </button>

      {state.message ? (
        <p
          className={`form-note ${state.status === "success" ? "text-spark-hot" : "text-spark"}`}
          aria-live="polite"
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </p>
      ) : (
        <p className="form-note">
          Tus datos solo se usan para responder tu cotización.
        </p>
      )}
    </form>
  );
}
