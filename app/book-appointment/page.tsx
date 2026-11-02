import BookAppointmentHero from "@/components/book-appointment/BookAppointmentHero";
import BookNowForm from "@/components/book-appointment/BookNowForm";

export default function BookAppointment() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BookAppointmentHero />
      <BookNowForm />
    </div>
  );
}
