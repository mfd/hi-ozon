import { Button } from "./Button";

interface ContactItemProps {
  label: string;
  children: React.ReactNode;
}

function ContactItem({ label, children }: ContactItemProps) {
  return (
    <div className="flex flex-[1_0_0] flex-col items-start max-w-[1440px] min-w-px">
      <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#828282] text-[20px] w-[min-content]">
        <p className="leading-[32px]">{label}</p>
      </div>
      <div className="flex gap-[4px] items-center justify-center">
        {children}
      </div>
    </div>
  );
}

interface ContactItemFullWidthProps {
  label: string;
  children: React.ReactNode;
}

function ContactItemFullWidth({ label, children }: ContactItemFullWidthProps) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start max-w-[1440px] w-full">
        <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#828282] text-[20px] w-[min-content]">
          <p className="leading-[32px]">{label}</p>
        </div>
        <div className="flex gap-[4px] items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MobileContactLinks() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Row 1: Resume & Portfolio */}
      <div className="flex gap-[16px] items-start w-full">
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
      </div>

      {/* Row 2: LinkedIn & Github */}
      <div className="flex gap-[16px] items-start w-full">
        <ContactItem label="LinkedIn:">
          <Button href="https://www.linkedin.com/in/kashaev/">
            @kashaev
          </Button>
        </ContactItem>
        <ContactItem label="Github">
          <Button href="https://github.com/mfd">@mfd</Button>
        </ContactItem>
      </div>

      {/* Row 3: Telegram (Full Width) */}
      <ContactItemFullWidth label="Telegram:">
        <Button href="https://t.me/kashaev">@kashaev</Button>
      </ContactItemFullWidth>
    </div>
  );
}
