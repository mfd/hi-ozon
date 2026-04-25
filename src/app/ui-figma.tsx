import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./components/ui/chart";
import { Checkbox } from "./components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./components/ui/hover-card";
import { Input } from "./components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./components/ui/input-otp";
import { Label } from "./components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Progress } from "./components/ui/progress";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";
import { Slider } from "./components/ui/slider";
import { ScrollArea } from "./components/ui/scroll-area";
import { Switch } from "./components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Textarea } from "./components/ui/textarea";
import { Toggle } from "./components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./components/ui/tooltip";

const availableUiComponents = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "input-otp",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
] as const;

export default function UIFigmaPage() {
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState<number[]>([42]);
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date());

  const chartData = [
    { month: "Jan", value: 120 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 150 },
    { month: "Apr", value: 220 },
  ];

  const chartConfig = {
    value: { label: "Views", color: "hsl(var(--chart-1))" },
  };

  return (
    <div className="bg-white min-h-screen px-8 py-10">
      <div className="mx-auto max-w-[960px] flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-[32px] leading-[48px] text-[#1f1f1f]">UI Figma</h1>
          <Badge variant="outline">/ui-figma</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Available UI Components</CardTitle>
            <CardDescription>Полный список из `src/app/components/ui`</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {availableUiComponents.map((componentName) => (
              <Badge key={componentName} variant="secondary">
                {componentName}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar + Chart</CardTitle>
            <CardDescription>Добавил недостающие демо Avatar и Chart</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Avatar</Label>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar demo" />
                  <AvatarFallback>KK</AvatarFallback>
                </Avatar>
                <span className="text-sm text-[#1f1f1f]">Avatar with fallback</span>
              </div>
            </div>
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Chart</Label>
              <ChartContainer config={chartConfig} className="min-h-[180px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={6} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Базовые варианты кнопок из ui-компонентов</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button>
              <Plus />
              С иконкой слева
            </Button>
            <Button variant="outline">
              С иконкой справа
              <ArrowRight />
            </Button>
            <Button variant="secondary" size="icon" aria-label="Добавить">
              <Plus />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="ui-figma-input">Input</Label>
              <Input id="ui-figma-input" placeholder="Введите текст" />
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="ui-figma-checkbox"
                checked={checked}
                onCheckedChange={(value) => setChecked(Boolean(value))}
              />
              <Label htmlFor="ui-figma-checkbox">Checkbox</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="ui-figma-switch" checked={enabled} onCheckedChange={setEnabled} />
              <Label htmlFor="ui-figma-switch">Switch</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Demo Gallery</CardTitle>
            <CardDescription>Интерактивные демо для быстрого просмотра компонентов</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Textarea</Label>
              <Textarea placeholder="Текст для демо..." />
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Slider ({sliderValue[0]})</Label>
              <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Radio Group</Label>
              <RadioGroup defaultValue="option-1">
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="r1" value="option-1" />
                  <Label htmlFor="r1">Option 1</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="r2" value="option-2" />
                  <Label htmlFor="r2">Option 2</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Select</Label>
              <Select defaultValue="figma">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Выберите инструмент" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="figma">Figma</SelectItem>
                  <SelectItem value="cursor">Cursor</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Toggle</Label>
              <Toggle aria-label="Toggle demo">Bold</Toggle>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Toggle Group</Label>
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Navigation + Overlays</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Breadcrumb</Label>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>UI Figma</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Navigation Menu</Label>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink className="w-[220px]">
                        Список доступных UI-компонентов
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Menubar</Label>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Save</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Tooltip + Popover + HoverCard</Label>
              <div className="flex flex-wrap gap-2">
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Tooltip</Button></TooltipTrigger>
                  <TooltipContent>Tooltip content</TooltipContent>
                </Tooltip>
                <Popover>
                  <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                  <PopoverContent>Popover content</PopoverContent>
                </Popover>
                <HoverCard>
                  <HoverCardTrigger asChild><Button variant="outline">HoverCard</Button></HoverCardTrigger>
                  <HoverCardContent>Hover card content</HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data + Layout</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Table</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Kamil</TableCell><TableCell>Designer</TableCell></TableRow>
                  <TableRow><TableCell>Alex</TableCell><TableCell>Frontend</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Pagination</Label>
              <Pagination>
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationNext href="#" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div className="grid gap-3 rounded-md border p-4">
              <Label>ScrollArea + Skeleton</Label>
              <ScrollArea className="h-[120px] rounded-md border p-3">
                <div className="grid gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Aspect Ratio + Input OTP</Label>
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md border">
                <div className="flex h-full items-center justify-center bg-[#f5f5f5] text-sm text-[#828282]">
                  16:9
                </div>
              </AspectRatio>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dialog Family + Calendar</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-3 rounded-md border p-4">
              <Label>Dialog / AlertDialog / Sheet / Drawer</Label>
              <div className="flex flex-wrap gap-2">
                <Dialog>
                  <DialogTrigger asChild><Button variant="outline">Dialog</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog demo</DialogTitle>
                      <DialogDescription>Компонент dialog работает</DialogDescription>
                    </DialogHeader>
                    <DialogFooter><Button>OK</Button></DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild><Button variant="outline">Alert</Button></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm action</AlertDialogTitle>
                      <AlertDialogDescription>Это demo alert-dialog.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Sheet>
                  <SheetTrigger asChild><Button variant="outline">Sheet</Button></SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet demo</SheetTitle>
                      <SheetDescription>Боковая панель</SheetDescription>
                    </SheetHeader>
                    <SheetFooter><Button>Done</Button></SheetFooter>
                  </SheetContent>
                </Sheet>

                <Drawer>
                  <DrawerTrigger asChild><Button variant="outline">Drawer</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Drawer demo</DrawerTitle>
                      <DrawerDescription>Выдвижная панель</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Save</Button>
                      <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="grid gap-3 rounded-md border p-4">
              <Label>Calendar + Collapsible</Label>
              <Calendar mode="single" selected={calendarDate} onSelect={setCalendarDate} className="rounded-md border" />
              <Collapsible className="rounded-md border p-3">
                <CollapsibleTrigger asChild><Button variant="ghost">Toggle details</Button></CollapsibleTrigger>
                <CollapsibleContent className="pt-2 text-sm text-[#1f1f1f]">
                  Collapsible content preview.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs + Accordion</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="pt-3 text-sm text-[#1f1f1f]">
                Здесь можно быстро проверить базовые паттерны ui-kit.
              </TabsContent>
              <TabsContent value="code" className="pt-3 text-sm text-[#828282]">
                Компоненты берутся из `src/app/components/ui`.
              </TabsContent>
            </Tabs>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Accordion item</AccordionTrigger>
                <AccordionContent>Контент аккордеона для визуальной проверки.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Progress value={66} />
            <Separator />
            <Alert>
              <AlertTitle>Готово</AlertTitle>
              <AlertDescription>
                Это отдельная страница-превью для ui-компонентов из папки `ui`.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="text-sm text-[#828282]">Добавляй сюда любые другие ui-компоненты для проверки.</CardFooter>
        </Card>
      </div>
    </div>
  );
}
