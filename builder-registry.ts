"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Avatar } from "./components/ui/primitives/Avatar/Avatar";
import { Button, ButtonGroup } from "./components/ui/primitives/Button/Button";
import { Footer } from "./components/ui/compositions/Footers/Footers";
import {
  Header,
  HeaderAuth,
} from "./components/ui/compositions/Headers/Headers";
import { InputField } from "./components/ui/primitives/Input/Input";
import { NavigationPill } from "./components/ui/primitives/Navigation/Navigation";
import { TextareaField } from "./components/ui/primitives/Textarea/Textarea";
import {
  TextContentTitle,
  TextLinkList,
  TextStrong,
} from "./components/ui/primitives/Text/Text";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(NavigationPill, {
  name: "NavigationPill",
});

Builder.registerComponent(HeaderAuth, {
  name: "HeaderAuth",
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(TextContentTitle, {
  name: "TextContentTitle",
});

Builder.registerComponent(withChildren(InputField), {
  name: "InputField",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode | ((values: T & { defaultChildren: ReactNode; }) => ReactNode)",
      },
    },
    {
      name: "className",
      type: "string",
      meta: {
        ts: "string | ((values: T & { defaultClassName: string; }) => string)",
      },
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "errorMessage",
      type: "string",
      meta: {
        ts: "string | ((validation: ValidationResult) => string)",
      },
    },
    {
      name: "isInvalid",
      type: "boolean",
    },
    {
      name: "label",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties | ((values: T & { defaultStyle: CSSProperties; }) => CSSProperties)",
      },
    },
    {
      name: "validationBehavior",
      type: "string",
      enum: ["aria", "native"],
    },
  ],
});

Builder.registerComponent(withChildren(TextareaField), {
  name: "TextareaField",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode | ((values: T & { defaultChildren: ReactNode; }) => ReactNode)",
      },
    },
    {
      name: "className",
      type: "string",
      meta: {
        ts: "string | ((values: T & { defaultClassName: string; }) => string)",
      },
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "errorMessage",
      type: "string",
      meta: {
        ts: "string | ((validation: ValidationResult) => string)",
      },
    },
    {
      name: "isInvalid",
      type: "boolean",
    },
    {
      name: "isResizable",
      type: "boolean",
    },
    {
      name: "label",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties | ((values: T & { defaultStyle: CSSProperties; }) => CSSProperties)",
      },
    },
    {
      name: "validationBehavior",
      type: "string",
      enum: ["aria", "native"],
    },
  ],
});

Builder.registerComponent(ButtonGroup, {
  name: "ButtonGroup",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(TextLinkList, {
  name: "TextLinkList",
});

Builder.registerComponent(withChildren(TextStrong), {
  name: "TextStrong",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "elementType",
      type: "string",
    },
  ],
});

Builder.registerComponent(Avatar, {
  name: "Avatar",
});
