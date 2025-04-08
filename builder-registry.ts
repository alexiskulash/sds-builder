"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Avatar,
  AvatarBlock,
} from "./src/components/ui/primitives/Avatar/Avatar";
import {
  Button,
  ButtonGroup,
} from "./src/components/ui/primitives/Button/Button";
import Footer from "./src/components/ui/Footer";
import Header from "./src/components/ui/Header";
import HomePage from "./src/components/HomePage";
import { NavigationPill } from "./src/components/ui/primitives/Navigation/Navigation";
import TestimonialCard from "./src/components/ui/TestimonialCard";
import {
  TextContentHeading,
  TextContentTitle,
  TextHeading,
  TextLinkList,
  TextStrong,
} from "./src/components/ui/primitives/Text/Text";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(HomePage, {
  name: "HomePage",
  inputs: [],
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(NavigationPill, {
  name: "NavigationPill",
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(TextContentTitle, {
  name: "TextContentTitle",
});

Builder.registerComponent(ButtonGroup, {
  name: "ButtonGroup",
});

Builder.registerComponent(TextContentHeading, {
  name: "TextContentHeading",
});

Builder.registerComponent(TestimonialCard, {
  name: "TestimonialCard",
  inputs: [
    {
      name: "avatarSrc",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "quote",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(TextHeading), {
  name: "TextHeading",
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

Builder.registerComponent(AvatarBlock, {
  name: "AvatarBlock",
});

Builder.registerComponent(Avatar, {
  name: "Avatar",
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
