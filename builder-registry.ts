"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Avatar } from "./components/ui/primitives/Avatar/Avatar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Avatar, {
  name: "Avatar",
});
