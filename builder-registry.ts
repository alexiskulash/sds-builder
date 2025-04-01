"use client";
import { builder, Builder } from "@builder.io/react";
import { Avatar } from "./components/ui/primitives/Avatar/Avatar";
import { Footer } from "./components/ui/compositions/Footers/Footers";
import {
  Header,
  HeaderAuth,
} from "./components/ui/compositions/Headers/Headers";
import { InputField } from "./components/ui/primitives/Input/Input";
import { TextareaField } from "./components/ui/primitives/Textarea/Textarea";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Avatar, {
  name: "Avatar",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(HeaderAuth, {
  name: "HeaderAuth",
});

Builder.registerComponent(InputField, {
  name: "InputField",
});

Builder.registerComponent(TextareaField, {
  name: "TextareaField",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});
