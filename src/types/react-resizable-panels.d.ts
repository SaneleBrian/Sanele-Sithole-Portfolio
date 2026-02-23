declare module "react-resizable-panels" {
  import * as React from "react";

  interface PanelGroupProps {
    children: React.ReactNode;
    direction?: "horizontal" | "vertical";
    className?: string;
  }

  interface PanelProps {
    children: React.ReactNode;
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    className?: string;
  }

  interface PanelResizeHandleProps {
    className?: string;
  }

  export const PanelGroup: React.FC<PanelGroupProps>;
  export const Panel: React.FC<PanelProps>;
  export const PanelResizeHandle: React.FC<PanelResizeHandleProps>;
}
