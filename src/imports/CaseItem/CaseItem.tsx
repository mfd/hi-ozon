import svgPaths from "./svg-5m2i774egh";
import imgWrap from "./c917094ae258006a37acccae50f9fd5655c24ce6.png";
import imgWrap1 from "./f8bd281c252597987261f4f739ebf574ff336990.png";
import imgWrap2 from "./7376775cb3cc056252084284a540984caf61a70a.png";
import imgWrap3 from "./edad8c7a22e311cdbb1ed748620a6f956756c2f6.png";
import imgWrap4 from "./ab2566354d871c6fb1af25e9518cc9f3f8743fe0.png";
import imgWrap5 from "./941d0fa13fd522e812dc3562f430267eb195489b.png";

function Buttons() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="buttons">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="RightAddon">
          <div className="absolute inset-[8.33%_20.82%_8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0037 19.9998">
              <path d={svgPaths.p12865800} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[0px] whitespace-nowrap">
          <a className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline" href="https://www.figma.com/design/jJNyWWibEZlGBoufZG9lEC?node-id=1404-20866" target="_blank">
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
      <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[33px]">UI-кит мобильного приложения Озон-Банка с поддержкой светлой и темной темы</p>
      </div>
      <Buttons />
    </div>
  );
}

function Solution() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="solution">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
        <p className="leading-[32px]">Собран в рамках участия в конкурсе продуктовых дизайнеров Ozon Design Challenge 2023 (работа попала в финал)</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="container">
      <Head />
      <Solution />
    </div>
  );
}

function Wrap() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgWrap} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap1} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap2} />
        </div>
      </div>
      <div className="absolute h-[100px] left-[2px] top-[-10px] w-[151px]" data-name="image 1" />
    </div>
  );
}

function Wrap1() {
  return (
    <div className="h-[86.13px] overflow-clip relative shrink-0 w-[153.12px]" data-name="wrap">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap3} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgWrap4} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWrap5} />
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

export default function CaseItem() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="CaseItem">
      <Container />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Gallery">
        <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
          <Wrap />
          <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
        </div>
        <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[86px] items-start relative shrink-0 w-[153px]" data-name="GalleryPreview">
          <Wrap1 />
          <div className="absolute bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]" data-name="Overlay" />
        </div>
      </div>
      <Border />
    </div>
  );
}