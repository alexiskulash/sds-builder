"use client";
import { builder, Builder } from "@builder.io/react";
import { Avatar, AvatarBlock } from "./components/ui/primitives/Avatar/Avatar";
import { Button, ButtonGroup } from "./components/ui/primitives/Button/Button";
import {
  Header,
  HeaderAuth,
} from "./components/ui/compositions/Headers/Headers";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(HeaderAuth, {
  name: "HeaderAuth",
});

Builder.registerComponent(Avatar, {
  name: "Avatar",
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(ButtonGroup, {
  name: "ButtonGroup",
});

Builder.registerComponent(AvatarBlock, {
  name: "AvatarBlock",
});
