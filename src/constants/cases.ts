// Mobile images imports
import imgWrap from "../imports/Mob/522b08d6c7f1559647e47ab942bcd0ed80e9e08c.png";
import imgWrap1 from "../imports/Mob/b205488ef88696852ac93c6300943a9d856c8a93.png";
import imgWrap2 from "../imports/Mob/6825dca3c91cd79893eab4857766f3aeeafcd212.png";
import imgWrap3 from "../imports/Mob/edad8c7a22e311cdbb1ed748620a6f956756c2f6.png";
import imgWrap4 from "../imports/Mob/ab2566354d871c6fb1af25e9518cc9f3f8743fe0.png";
import imgWrap5 from "../imports/Mob/7496c196fc95f4876a1dcd7f386b44168988670f.png";
import imgWrap6 from "../imports/Mob/c917094ae258006a37acccae50f9fd5655c24ce6.png";
import imgWrap7 from "../imports/Mob/f8bd281c252597987261f4f739ebf574ff336990.png";
import imgWrap8 from "../imports/Mob/7376775cb3cc056252084284a540984caf61a70a.png";
import imgWrap9 from "../imports/Mob/941d0fa13fd522e812dc3562f430267eb195489b.png";
import imgWrap10 from "../imports/Mob/d2f52e6d68c548e9ead8e7289ffbca9ca8a9f74b.png";
import imgWrap11 from "../imports/Mob/64f0c4e5a2a1e0df38cae6d5b2f58014911bef5a.png";
import imgWrap12 from "../imports/Mob/86f2390f2c78c5e790f9b7ec24116da256094251.png";
import imgWrap13 from "../imports/Mob/49dbec775e05ee120efc3b8a33b4ce62500d9f91.png";

// Desktop images imports
import imgWrapDesk from "../imports/Main/edad8c7a22e311cdbb1ed748620a6f956756c2f6.png";
import imgWrapDesk1 from "../imports/Main/ab2566354d871c6fb1af25e9518cc9f3f8743fe0.png";
import imgWrapDesk2 from "../imports/Main/d2f52e6d68c548e9ead8e7289ffbca9ca8a9f74b.png";
import imgWrapDesk3 from "../imports/Main/45380ae8f3a78c5a514fd4bfe83716e532c0c765.png";
import imgWrapDesk4 from "../imports/Main/b205488ef88696852ac93c6300943a9d856c8a93.png";
import imgWrapDesk5 from "../imports/Main/dc7e645f5d627913ed68e0c959de70ba59078429.png";
import imgWrapDesk6 from "../imports/Main/92edd8247f325e1a737553effa07b6e75f5e5b09.png";
import imgWrapDesk7 from "../imports/Main/522b08d6c7f1559647e47ab942bcd0ed80e9e08c.png";
import imgWrapDesk8 from "../imports/Main/6825dca3c91cd79893eab4857766f3aeeafcd212.png";
import imgWrapDesk9 from "../imports/Main/7496c196fc95f4876a1dcd7f386b44168988670f.png";
import imgWrapDesk10 from "../imports/Main/fce679d17a824869a75f49dc2613d3bbf9cf8b38.png";
import imgOzonBank1 from "../imports/CaseItem/c917094ae258006a37acccae50f9fd5655c24ce6.png";
import imgOzonBank2 from "../imports/CaseItem/f8bd281c252597987261f4f739ebf574ff336990.png";
import imgOzonBank3 from "../imports/CaseItem/7376775cb3cc056252084284a540984caf61a70a.png";
import imgOzonBank4 from "../imports/CaseItem/edad8c7a22e311cdbb1ed748620a6f956756c2f6.png";
import imgOzonBank5 from "../imports/CaseItem/ab2566354d871c6fb1af25e9518cc9f3f8743fe0.png";
import imgOzonBank6 from "../imports/CaseItem/941d0fa13fd522e812dc3562f430267eb195489b.png";
import imgWrapDesk15 from "../imports/Main/64f0c4e5a2a1e0df38cae6d5b2f58014911bef5a.png";
import imgWrapDesk16 from "../imports/Main/86f2390f2c78c5e790f9b7ec24116da256094251.png";
import imgWrapDesk17 from "../imports/Main/49dbec775e05ee120efc3b8a33b4ce62500d9f91.png";
import imgWrapDesk18 from "../imports/Main/d44ff45b402c9dafcec79817f5d8b10f4c84e39a.png";

// Import JSON data
import casesDataRaw from "./cases.json";

// Mobile image mapping
const mobileImageMap: Record<string, string> = {
  imgWrap,
  imgWrap1,
  imgWrap2,
  imgWrap3,
  imgWrap4,
  imgWrap5,
  imgWrap6,
  imgWrap7,
  imgWrap8,
  imgWrap9,
  imgWrap10,
  imgWrap11,
  imgWrap12,
  imgWrap13,
};

// Desktop image mapping
const desktopImageMap: Record<string, string> = {
  imgWrap4: imgWrapDesk4,
  imgWrap5: imgWrapDesk5,
  imgWrap6: imgWrapDesk6,
  imgWrap7: imgWrapDesk7,
  imgWrap8: imgWrapDesk8,
  imgWrap9: imgWrapDesk9,
  imgWrap10: imgWrapDesk10,
  imgOzonBank3,
  imgOzonBank6,
  imgWrap15: imgWrapDesk15,
  imgWrap16: imgWrapDesk16,
  imgWrap17: imgWrapDesk17,
};

// Case item type
export interface CaseData {
  title: string;
  figmaUrl?: string;
  figmaButtonText?: string;
  githubUrl?: string;
  githubButtonText?: string;
  prototypeUrl?: string;
  prototypeButtonText?: string;
  exampleUrl?: string;
  exampleButtonText?: string;
  description?: string;
  goal?: string;
  solution?: string;
  desktopImages: string[];
  mobileImages: string[];
  showBorder?: boolean;
}

// Transform data to include actual image paths
export const casesData: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  desktopImages: caseItem.desktopImages,
  mobileImages: caseItem.mobileImages,
}));

// Export mobile cases with resolved image paths
export const mobileCasesData = casesData.map((caseItem) => ({
  ...caseItem,
  images: caseItem.mobileImages.map((imageKey) => mobileImageMap[imageKey]),
}));

// Export desktop cases with resolved image paths (for future use)
export const desktopCasesData = casesData.map((caseItem) => ({
  ...caseItem,
  images: caseItem.desktopImages.map((imageKey) => desktopImageMap[imageKey]),
}));