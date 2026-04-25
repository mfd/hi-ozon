import { Button } from "./Button";


interface ContactItemProps {
  label: string;
  children: React.ReactNode;
}

function ContactItem({ label, children }: ContactItemProps) {
  return (
    <div className="flex flex-col items-start w-full">
      <p className="leading-[32px] text-[#828282] text-[20px]">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
      <ContactItem label="Resume:">
        <Button href="https://drive.google.com/file/d/1lwLDIsFsPkCB4fV_pA51vrxF_OifP2N4/view">
          Download CV
        </Button>
      </ContactItem>

      <ContactItem label="Portfolio:">
        <Button href="https://drive.google.com/file/d/1ghRI7AXcYDnfbW4NLPCToPiU8FIJRB67/view">
          Design Portfolio
        </Button>
      </ContactItem>

      <ContactItem label="Email:">
        <Button href="mailto:kashaev@gmail.com">
          kashaev@gmail.com
        </Button>
      </ContactItem>

      <ContactItem label="Telegram:">
        <Button href="https://t.me/kashaev">@kashaev</Button>
      </ContactItem>

      <ContactItem label="LinkedIn:">
        <Button href="https://www.linkedin.com/in/kashaev/">
          @kashaev
        </Button>
      </ContactItem>

      <ContactItem label="Github">
        <Button href="https://github.com/mfd">@mfd</Button>
      </ContactItem>
    </div>
  );
}
