import imgAvatar from "./51147307bcf1e7209428f0b7ea0183e9f284189a.png";
import ContactLinks from "../../app/components/ContactLinks";

function Avatar() {
  return (
    <div className="relative rounded-[1021.972px] shrink-0 size-[144px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1021.972px] size-full"
        src={imgAvatar}
      />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
        <p className="leading-[48px] whitespace-nowrap">Kamil Kashaev</p>
      </div>
    </div>
  );
}

export default function Right() {
  return (
    <>
      <Avatar />
      <SectionTitle />
      <ContactLinks />
    </>
  );
}