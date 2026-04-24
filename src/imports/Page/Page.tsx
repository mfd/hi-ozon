import svgPaths from "./svg-knzcy1fw9u";
import imgWrap from "./edad8c7a22e311cdbb1ed748620a6f956756c2f6.png";
import imgWrap1 from "./ab2566354d871c6fb1af25e9518cc9f3f8743fe0.png";
import imgWrap2 from "./d2f52e6d68c548e9ead8e7289ffbca9ca8a9f74b.png";
import imgWrap3 from "./45380ae8f3a78c5a514fd4bfe83716e532c0c765.png";
import imgWrap4 from "./b205488ef88696852ac93c6300943a9d856c8a93.png";
import imgWrap5 from "./dc7e645f5d627913ed68e0c959de70ba59078429.png";
import imgWrap6 from "./92edd8247f325e1a737553effa07b6e75f5e5b09.png";
import imgWrap7 from "./522b08d6c7f1559647e47ab942bcd0ed80e9e08c.png";
import imgWrap8 from "./6825dca3c91cd79893eab4857766f3aeeafcd212.png";
import imgWrap9 from "./7496c196fc95f4876a1dcd7f386b44168988670f.png";
import imgWrap10 from "./fce679d17a824869a75f49dc2613d3bbf9cf8b38.png";
import imgWrap11 from "./c917094ae258006a37acccae50f9fd5655c24ce6.png";
import imgWrap12 from "./941d0fa13fd522e812dc3562f430267eb195489b.png";
import imgWrap13 from "./64f0c4e5a2a1e0df38cae6d5b2f58014911bef5a.png";
import imgWrap14 from "./86f2390f2c78c5e790f9b7ec24116da256094251.png";
import imgWrap15 from "./49dbec775e05ee120efc3b8a33b4ce62500d9f91.png";
import imgWrap16 from "./d44ff45b402c9dafcec79817f5d8b10f4c84e39a.png";
import Right from "../Right/Right";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic overflow-clip relative shrink-0 text-[#1f1f1f] w-[750px]" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] tracking-[0.21px] w-full">
        <p className="leading-[48px]">{`👋 Привет, Озон-банк! `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[0px] w-full">
        <p className="text-[20px]">
          <span className="leading-[32px]">Меня зовут Камиль, я работаю ведущим продуктовым дизайнером в Альфа‑Банке, мне очень близка тема дизайн-систем и разработки, поэтому хочу откликнуться, на вакансию </span>
          <span className="leading-[32px] font-bold">Продуктового дизайнера дизайн‑системы</span>
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Container />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[750px]" data-name="listItem">
      <div className="flex flex-col justify-center gap-[12px] leading-[0] min-w-full not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-[min-content]">
        <ul className="space-y-[12px]">
          <li className="list-disc ms-[30px]">
            <span className="leading-[32px]">Сфокусирован на точности реализации: обеспечиваю полное соответствие кода макетам</span>
          </li>
          <li className="list-disc ms-[30px]">
            <span className="leading-[32px]">Проектирую решения с учетом технических ограничений и умею находить баланс между сложностью разработки и бизнес‑целями, аргументируя дизайн-решения данными аналитики и результатами UX-исследований</span>
          </li>
          <li className="list-disc ms-[30px]">
            <span className="leading-[32px]">Люблю автоматизировать воркфлоу и рутину, пишу скрипты на bash/js</span>
          </li>
          <li className="list-disc ms-[30px]">
            <span className="leading-[32px]">Умею работать с кодом и разговариваю с фронтендами на одном языке (
            <a className="cursor-pointer decoration-solid underline not-italic underline" href="https://learn.javascript.ru/courses/js-20160216-2130/mfd/en/certificate.jpg" target="_blank">
                javascript.ru сertification
            </a>
              </span>
            )
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-0 relative w-[660px]" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSkills() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="SectionSkills">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="SectionTitle">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
          <p className="leading-[48px]">Ключевые навыки</p>
        </div>
      </div>
      <ListItem />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://www.figma.com/design/jJNyWWibEZlGBoufZG9lEC?node-id=1406-2" target="_blank">
            Figma-файл
          </a>
        </div>
      </div>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="head">
      <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">Компоненты и виджеты платформы сайта Альфа-Банка</p>
      </div>
      <Buttons />
    </div>
  );
}

function Goal() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="goal">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Пример компонентов Button, SliderInput разработанных в рамках развития дизайн‑системы А-kit</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head />
      <Goal />
    </div>
  );
}

function Wrap() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap2} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap3} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap4} />
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap1() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap5} />
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap2() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap6} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap7} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[8px] relative shrink-0 w-full" data-name="border">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-px relative w-full" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#c5c5c5] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://www.figma.com/design/jJNyWWibEZlGBoufZG9lEC?node-id=1404-20866" target="_blank">
            Figma-файл
          </a>
        </div>
      </div>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="head">
      <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">Siemens AG и Siemens Energy – Темизация платформ</p>
      </div>
      <Buttons1 />
    </div>
  );
}

function Goal1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="goal">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Цель:</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Сделать универсальное решение для двух бренд платформ</p>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="solution">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Решение</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Темизация на стилях и токенах в Figma</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head1 />
      <Goal1 />
      <Solution />
    </div>
  );
}

function Wrap3() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap2} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap8} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap4() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap9} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap5() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap6} />
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap6() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap10} />
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[8px] relative shrink-0 w-full" data-name="border">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-px relative w-full" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#c5c5c5] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://www.figma.com/design/jJNyWWibEZlGBoufZG9lEC?node-id=1404-20866" target="_blank">
            Figma-файл
          </a>
        </div>
      </div>
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="head">
      <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">UI-кит мобильного приложения Озон-Банка с поддержкой светлой и темной темы</p>
      </div>
      <Buttons2 />
    </div>
  );
}

function Solution1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="solution">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Собран в рамках участия в конкурсе продуктовых дизайнеров Ozon Design Challenge 2023 (работа попала в финал)</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head2 />
      <Solution1 />
    </div>
  );
}

function Wrap7() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWrap11} />
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap8() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap12} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[8px] relative shrink-0 w-full" data-name="border">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-px relative w-full" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#c5c5c5] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://www.figma.com/design/jJNyWWibEZlGBoufZG9lEC?node-id=1404-20866" target="_blank">
            Figma-файл
          </a>
        </div>
      </div>
    </div>
  );
}

function Head3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="head">
      <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">Видео на платформе alfabank.ru</p>
      </div>
      <Buttons3 />
    </div>
  );
}

function Goal2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="goal">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Цель:</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Прорисерчить и реализовать решение для публикации видео, решить текущие проблемы и ограничения</p>
      </div>
    </div>
  );
}

function Solution2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="solution">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Решение</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Конвертор и гайды публикации видео на сайте alfabank.ru</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head3 />
      <Goal2 />
      <Solution2 />
    </div>
  );
}

function Wrap9() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap2} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap8} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap13} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap10() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap1} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap9} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap14} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Border3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[8px] relative shrink-0 w-full" data-name="border">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="h-px relative w-full" data-name="HorizontalBorder">
            <div aria-hidden="true" className="absolute border-[#c5c5c5] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_8.33%_10.39%_8.34%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.999 19.5061">
              <path d={svgPaths.p18c76780} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://github.com/mfd/text2layers" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button-text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <p className="decoration-solid leading-[32px] text-[20px] underline">Пример работы плагина</p>
        </div>
      </div>
    </div>
  );
}

function Head4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="head">
      <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">Text2Layers, плагин для Figma для сборки контентных страниц</p>
      </div>
      <Buttons4 />
    </div>
  );
}

function Goal3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="goal">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Цель:</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Увеличить Time2Market сборки типовых продуктовых и контентных страниц на сайте alfabank.ru</p>
      </div>
    </div>
  );
}

function Solution3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-full" data-name="solution">
      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.7px]">Решение</p>
      </div>
      <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">
          Плагин для обработки контента из Google Docs / Microsoft Word
          <br aria-hidden="true" />
          в компоненты Figma
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head4 />
      <Goal3 />
      <Solution3 />
    </div>
  );
}

function Wrap11() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap15} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap16} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function CaseList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CaseList">
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[750px]" data-name="case-item">
        <Container1 />
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap1 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap2 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
        </div>
        <Border />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[750px]" data-name="case-item">
        <Container2 />
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap3 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap4 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap5 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap6 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
        </div>
        <Border1 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[750px]" data-name="case-item">
        <Container3 />
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap7 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap8 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
        </div>
        <Border2 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[750px]" data-name="case-item">
        <Container4 />
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap9 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap10 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
        </div>
        <Border3 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[750px]" data-name="case-item">
        <Container5 />
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
            <Wrap11 />
            <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCase() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="SectionCase">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="SectionTitle">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
          <p className="leading-[48px]">Релевантные кейсы :</p>
        </div>
      </div>
      <CaseList />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start overflow-clip relative shrink-0 w-[1140px]" data-name="Main">
      <Header />
      <SectionSkills />
      <SectionCase />
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[32px] py-[96px] relative min-h-full" data-name="Page">
      <Main />
      <div className="absolute bottom-0 h-[2980px] pointer-events-none right-[150px] top-0">
        <div className="content-stretch flex flex-col gap-[40px] h-[860px] items-start overflow-clip pb-[32px] pointer-events-auto sticky top-0 w-[260px]">
          <Right />
        </div>
      </div>
    </div>
  );
}