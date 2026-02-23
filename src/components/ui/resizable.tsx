import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

export const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

export const ResizablePanel = Panel;

// NOTE: PanelResizeHandle does NOT accept children
export const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & { withHandle?: boolean }) => (
  <div className="relative flex items-center w-full h-full">
    <PanelResizeHandle
      className={cn(
        "relative flex w-px bg-border data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
        className
      )}
      {...props}
    />
    {withHandle && (
      <div className="absolute z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </div>
);
