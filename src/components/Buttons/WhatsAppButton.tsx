import Link from "next/link";

export default function BtnWhats() {
  return (
    <Link
      href="https://wa.me/message/IFBW3ARPBITWA1"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp inline-block bg-green-600 hover:bg-green-700 rounded-full border-none text-white text-center p-3"
      aria-label="botón de mensaje directo a WhatsApp"
      title="botón de mensaje directo a WhatsApp"
    >
      <span className="icon-whatsapp text-center text-4xl p-0 m-0"></span>
    </Link>
  );
}