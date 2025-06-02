import Link from "next/link";

export default function BtnWhats() {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5521999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp btn btn-success rounded-circle border-0 text-white text-center p-3"
      aria-label="boton de mensaje directo aWhatsApp"
      title="boton de mensaje directo WhatsApp"
    >
      <span class="icon-whatsapp text-center fs-1 p-0 m-0"></span>
    </Link>
  );
}